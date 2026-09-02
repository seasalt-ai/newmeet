# Video 06 stills — fr

record-telegram-call · /record/telegram

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'telegram', key: 'telegram-ai-summary', locale: 'fr' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/telegram-ai-summary.png` — Résumé, décisions et éléments d'action (cropped to the app window) · 1712×928
- `product/telegram-memory.png` — Mémoire de réunions — personnes, organisations, sujets (cropped to the app window) · 1712×928
- `product/telegram-seek.png` — Un horodatage de la transcription déplace le lecteur (cropped to the app window) · 1712×928
- `product/telegram-transcript.png` — Trois orateurs, séparés, avec horodatages (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/telegram-bots-cant-join.png` — Des preneurs de notes sans lien de réunion à rejoindre · 1920×1080
- `demo/telegram-detected.png` — SeaMeet détecte le chat vocal Telegram et propose de l’enregistrer · 1920×1080
- `demo/telegram-latecomer.png` — Quelqu’un rejoint un chat vocal déjà en cours d’enregistrement · 1920×1080
- `demo/telegram-recording.png` — Enregistrement de tout le monde sur le chat vocal, sans partage d’écran · 1920×1080
