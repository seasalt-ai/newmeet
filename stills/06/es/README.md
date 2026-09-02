# Video 06 stills — es

record-telegram-call · /record/telegram

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'telegram', key: 'telegram-ai-summary', locale: 'es' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/telegram-ai-summary.png` — Resumen, decisiones y elementos de acción (cropped to the app window) · 1712×928
- `product/telegram-memory.png` — Memoria de reuniones: personas, organizaciones y temas (cropped to the app window) · 1712×928
- `product/telegram-seek.png` — Una marca de tiempo de la transcripción mueve el reproductor (cropped to the app window) · 1712×928
- `product/telegram-transcript.png` — Tres oradores, separados, con marcas de tiempo (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/telegram-bots-cant-join.png` — Asistentes de notas sin enlace de reunión al que unirse · 1920×1080
- `demo/telegram-detected.png` — SeaMeet detecta el chat de voz de Telegram y ofrece grabarlo · 1920×1080
- `demo/telegram-latecomer.png` — Alguien entra en un chat de voz que ya se está grabando · 1920×1080
- `demo/telegram-recording.png` — Grabando a todos en el chat de voz, sin compartir pantalla · 1920×1080
