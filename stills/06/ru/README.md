# Video 06 stills — ru

record-telegram-call · /record/telegram

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'telegram', key: 'telegram-ai-summary', locale: 'ru' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/telegram-ai-summary.png` — Краткое содержание, решения и действия (cropped to the app window) · 1712×928
- `product/telegram-memory.png` — Память встреч — люди, организации, темы (cropped to the app window) · 1712×928
- `product/telegram-seek.png` — Метка времени в стенограмме перематывает плеер (cropped to the app window) · 1712×928
- `product/telegram-transcript.png` — Три докладчика, разделённые, с метками времени (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/telegram-bots-cant-join.png` — Помощники для заметок, которым некуда подключаться · 1920×1080
- `demo/telegram-detected.png` — SeaMeet распознаёт голосовой чат в Telegram и предлагает запись · 1920×1080
- `demo/telegram-latecomer.png` — Кто-то заходит в голосовой чат, который уже записывается · 1920×1080
- `demo/telegram-recording.png` — Запись всех участников голосового чата, без демонстрации экрана · 1920×1080
