# Video 07 stills — fr

record-wechat-call · /record/wechat

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'wechat', key: 'wechat-ai-summary', locale: 'fr' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/wechat-ai-summary.png` — Résumé, décisions et actions dans votre propre langue (cropped to the app window) · 1712×928
- `product/wechat-memory.png` — Mémoire de réunions — personnes, organisations, sujets (cropped to the app window) · 1712×928
- `product/wechat-mixed-transcript.png` — Une seule transcription en chinois et en anglais, horodatée (cropped to the app window) · 1712×928
- `product/wechat-seek.png` — Un horodatage de la transcription déplace le lecteur (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/wechat-call-running.png` — Un appel WeChat déjà en cours, que rien n'enregistre · 1920×1080
- `demo/wechat-prompt.png` — SeaMeet vous demande dès que l'appel commence · 1920×1080
- `demo/wechat-recording.png` — Les deux côtés de l'appel enregistrés, sans partage d'écran · 1920×1080
