# Video 06 stills — ja

record-telegram-call · /record/telegram

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'telegram', key: 'telegram-ai-summary', locale: 'ja' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/telegram-ai-summary.png` — まとめ、決定、アクションアイテム (cropped to the app window) · 1712×928
- `product/telegram-memory.png` — ミーティングメモリー — 人物、組織、トピック (cropped to the app window) · 1712×928
- `product/telegram-seek.png` — 文字起こしのタイムスタンプで再生位置が移動する (cropped to the app window) · 1712×928
- `product/telegram-transcript.png` — 3人のスピーカーを話者分離し、タイムスタンプ付きで表示 (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/telegram-bots-cant-join.png` — 参加する会議リンクがない議事録ツール · 1920×1080
- `demo/telegram-detected.png` — SeaMeet が Telegram の音声チャットを検出し、録音を提案 · 1920×1080
- `demo/telegram-latecomer.png` — すでに録音中の音声チャットに誰かが参加 · 1920×1080
- `demo/telegram-recording.png` — 音声チャットの全員を録音、画面共有なし · 1920×1080
