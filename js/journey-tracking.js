/**
 * journey-tracking.js — the marketing-site half of the attribution ledger
 * (seameet-app-desktop docs/gtm-growth/2026-09-16-attribution-ledger-plan.md §8).
 *
 * One job: give this browser a cross-domain journey id and report an
 * anonymous landing touch to the attribution-event Edge Function. The
 * app.seameet.ai client (web/src/platform/journey.ts) and this script are
 * two halves of the same contract — keep the shapes identical:
 *
 *   cookie  sm_journey  Domain=.seameet.ai · 30 d · Secure · SameSite=Lax
 *   mirror  localStorage seameet.journey {id, ts, touched}  (per-origin)
 *   touch   POST {op:'touch', surface:'marketing', journey_id, utm:{source,
 *           medium, campaign}, click_id, click_id_name, referrer_host,
 *           landing_path}  via navigator.sendBeacon, fire-and-forget
 *
 * Channel NORMALIZATION is server-side only (_shared/attribution.ts) — this
 * script never classifies anything, it only carries evidence. journey_id is
 * NEVER read from a URL parameter (anti-phishing-binding rule, plan §8).
 *
 * Deliberately does NOT touch utm-tracking.js (sessionStorage, outbound-UTM
 * appending — a different system with a different lifetime). Kill switch:
 * set ENABLED=false and every visitor goes quiet.
 */
(function () {
  'use strict';

  var ENABLED = true;
  var COOKIE_NAME = 'sm_journey';
  var MIRROR_KEY = 'seameet.journey';
  var TTL_DAYS = 30;
  var TTL_SECONDS = TTL_DAYS * 24 * 60 * 60;

  // PROD is the committed state (same posture as the extension's config.js).
  // Any non-seameet.ai host (local dev, preview deploys) points at DEV so a
  // test visit can never pollute the production ledger.
  var PROD_ENDPOINT = 'https://tvezjojyndcgkneyxook.supabase.co/functions/v1/attribution-event';
  var DEV_ENDPOINT = 'https://ifcxzlaynrdykqmcwgbh.supabase.co/functions/v1/attribution-event';

  var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  // Mirrors web/src/platform/journey.ts CLICK_ID_PARAMS exactly. fbclid is
  // captured as raw evidence only — server-side PAID_CLICK_IDS deliberately
  // excludes it (organic shares carry it too), so it never implies paid.
  var CLICK_ID_PARAMS = ['gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid'];

  function endpoint() {
    try {
      return /(^|\.)seameet\.ai$/.test(location.hostname) ? PROD_ENDPOINT : DEV_ENDPOINT;
    } catch (e) {
      return PROD_ENDPOINT;
    }
  }

  function readCookie(name) {
    try {
      var parts = document.cookie.split('; ');
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].indexOf(name + '=') === 0) {
          return decodeURIComponent(parts[i].slice(name.length + 1));
        }
      }
    } catch (e) { /* best-effort */ }
    return null;
  }

  function writeCookie(id) {
    try {
      document.cookie =
        COOKIE_NAME + '=' + encodeURIComponent(id) +
        '; Domain=.seameet.ai; Max-Age=' + TTL_SECONDS +
        '; Path=/; SameSite=Lax; Secure';
    } catch (e) { /* jsdom/local rejects the domain cookie — mirror carries it */ }
  }

  function readMirror() {
    try {
      var raw = localStorage.getItem(MIRROR_KEY);
      if (!raw) return null;
      var m = JSON.parse(raw);
      if (!m || !UUID_RE.test(m.id) || !m.ts) return null;
      // TTL guard in days (the mirror itself carries no expiry).
      if (Date.now() - Date.parse(m.ts) > TTL_DAYS * 86400000) return null;
      return m;
    } catch (e) { return null; }
  }

  function writeMirror(m) {
    try { localStorage.setItem(MIRROR_KEY, JSON.stringify(m)); } catch (e) { /* best-effort */ }
  }

  /** This browser's journey id: cookie → mirror → mint (uuid). */
  function ensureJourneyId() {
    var fromCookie = readCookie(COOKIE_NAME);
    if (fromCookie && UUID_RE.test(fromCookie)) {
      if (!readMirror()) writeMirror({ id: fromCookie, ts: new Date().toISOString() });
      return fromCookie;
    }
    var m = readMirror();
    if (m) { writeCookie(m.id); return m.id; }
    var id = null;
    try { id = crypto.randomUUID(); } catch (e) { id = null; }
    if (!id || !UUID_RE.test(id)) return null;
    writeCookie(id);
    writeMirror({ id: id, ts: new Date().toISOString() });
    return id;
  }

  /** Pure: build the touch payload from a location + referrer. Exported for tests. */
  function buildTouchPayload(journeyId, loc, referrer) {
    var utm = {};
    var clickId = null, clickIdName = null;
    try {
      var params = loc.search instanceof URLSearchParams ? loc.search : new URLSearchParams(loc.search || '');
      var map = { utm_source: 'source', utm_medium: 'medium', utm_campaign: 'campaign' };
      Object.keys(map).forEach(function (k) {
        var v = params.get(k);
        if (v) utm[map[k]] = v;
      });
      for (var i = 0; i < CLICK_ID_PARAMS.length; i++) {
        var v = params.get(CLICK_ID_PARAMS[i]);
        if (v) { clickIdName = CLICK_ID_PARAMS[i]; clickId = v; break; }
      }
    } catch (e) { /* best-effort */ }
    var referrerHost = null;
    try {
      if (referrer) {
        var r = new URL(referrer);
        if (r.host && r.host !== loc.host) referrerHost = r.host;
      }
    } catch (e) { /* unparseable referrer — record nothing rather than garbage */ }
    var landingPath = typeof loc.pathname === 'string' && loc.pathname ? loc.pathname : null;
    return {
      op: 'touch',
      surface: 'marketing',
      journey_id: journeyId,
      utm: utm,
      click_id: clickId,
      click_id_name: clickIdName,
      referrer_host: referrerHost,
      landing_path: landingPath
    };
  }

  function beacon(body) {
    try {
      if (typeof navigator.sendBeacon !== 'function') return;
      navigator.sendBeacon(endpoint(), new Blob([JSON.stringify(body)], { type: 'application/json' }));
    } catch (e) { /* fire-and-forget — never throw, never block */ }
  }

  /**
   * Send the landing touch. Server-side dedupe makes repeats safe; the
   * mirror's `touched` flag keeps signal-less return visits quiet after the
   * first (which still sends — a first-touch row of direct evidence).
   */
  function sendLandingTouch() {
    if (!ENABLED) return;
    var journeyId = ensureJourneyId();
    if (!journeyId) return;
    var payload = buildTouchPayload(journeyId, location, document.referrer || '');
    var m = readMirror();
    // Same signal bar as the web client: a source-less partial UTM (medium or
    // campaign only, e.g. a truncated link) still beats an empty payload —
    // channel resolution is unaffected (source is the anchor) but the raw
    // columns stay populated.
    var hasSignal = !!(
      payload.utm.source ||
      payload.utm.medium ||
      payload.utm.campaign ||
      payload.click_id_name ||
      payload.referrer_host
    );
    if (!hasSignal && m && m.touched) return;
    beacon(payload);
    if (m && !m.touched) writeMirror({ id: m.id, ts: m.ts, touched: true });
  }

  function init() {
    if (typeof window === 'undefined' || !ENABLED) return;
    try { sendLandingTouch(); } catch (e) { /* fire-and-forget */ }
  }

  // Test/debug surface (the contract test loads this file in a vm sandbox).
  window.__seameetJourney = {
    init: init,
    ensureJourneyId: ensureJourneyId,
    sendLandingTouch: sendLandingTouch,
    buildTouchPayload: buildTouchPayload,
    readMirror: readMirror,
    ENABLED: ENABLED,
    COOKIE_NAME: COOKIE_NAME,
    MIRROR_KEY: MIRROR_KEY,
    PROD_ENDPOINT: PROD_ENDPOINT,
    DEV_ENDPOINT: DEV_ENDPOINT
  };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();
