# Video 32 stills — en

(no shotlist)

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ video: '32', key: 'post-stop-share', locale: 'en' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/post-stop-share.png` — Straight after Stop: SeaMeet opens the share dialog itself, with the recording already saved · 1920×1080
- `product/share-dialog.png` — The Share dialog: people added by email, link access set to anyone with the link, and the note that viewing needs a sign-in · 1920×1080

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

_(none rendered)_
