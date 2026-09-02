# Video 07 stills — es

record-wechat-call · /record/wechat

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'wechat', key: 'wechat-ai-summary', locale: 'es' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/wechat-ai-summary.png` — Resumen, decisiones y tareas en tu propio idioma (cropped to the app window) · 1712×928
- `product/wechat-memory.png` — Memoria de reuniones: personas, organizaciones y temas (cropped to the app window) · 1712×928
- `product/wechat-mixed-transcript.png` — Una sola transcripción con chino e inglés, con marcas de tiempo (cropped to the app window) · 1712×928
- `product/wechat-seek.png` — Una marca de tiempo de la transcripción mueve el reproductor (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/wechat-call-running.png` — Una llamada de WeChat ya en curso, sin nada grabándola · 1920×1080
- `demo/wechat-prompt.png` — SeaMeet pregunta en cuanto empieza la llamada · 1920×1080
- `demo/wechat-recording.png` — Grabando ambas partes de la llamada, sin compartir pantalla · 1920×1080
