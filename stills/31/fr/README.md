# Video 31 stills — fr

free-recorder

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ video: '31', key: 'live-transcription', locale: 'fr' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/live-transcription.png` — Transcription en direct pendant l’enregistrement : la bande CC sous la pastille d’enregistrement, et la transcription qui se remplit au fil des échanges · 1600×900
- `product/recording-modes.png` — Choisir ce qu’on enregistre : audio seul, tout l’écran, une fenêtre ou une zone · 1600×900

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

_(none rendered)_
