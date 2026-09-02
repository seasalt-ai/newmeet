# Video 06 stills — en

record-telegram-call · /record/telegram

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'telegram', key: 'telegram-ai-summary', locale: 'en' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/telegram-ai-summary.png` — Summary, decisions and action items (cropped to the app window) · 1712×928
- `product/telegram-memory.png` — Meeting Memory — people, organizations, topics (cropped to the app window) · 1712×928
- `product/telegram-seek.png` — A transcript timestamp seeks the player (cropped to the app window) · 1712×928
- `product/telegram-transcript.png` — Three speakers, separated, with timestamps (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/telegram-bots-cant-join.png` — Notetakers with no meeting link to join · 1920×1080
- `demo/telegram-detected.png` — SeaMeet detects the Telegram voice chat and offers to record · 1920×1080
- `demo/telegram-latecomer.png` — Someone joins a voice chat that is already being recorded · 1920×1080
- `demo/telegram-recording.png` — Recording everyone on the voice chat, no screen share · 1920×1080
