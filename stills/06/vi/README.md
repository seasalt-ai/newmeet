# Video 06 stills — vi

record-telegram-call · /record/telegram

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'telegram', key: 'telegram-ai-summary', locale: 'vi' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/telegram-ai-summary.png` — Bản tóm tắt, quyết định và mục hành động (cropped to the app window) · 1712×928
- `product/telegram-memory.png` — Bộ nhớ cuộc họp — con người, tổ chức, chủ đề (cropped to the app window) · 1712×928
- `product/telegram-seek.png` — Dấu thời gian trong bản phiên âm tua trình phát (cropped to the app window) · 1712×928
- `product/telegram-transcript.png` — Ba người phát biểu, được tách riêng, kèm dấu thời gian (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/telegram-bots-cant-join.png` — Công cụ ghi chép không có liên kết cuộc họp để tham gia · 1920×1080
- `demo/telegram-detected.png` — SeaMeet phát hiện cuộc trò chuyện thoại Telegram và đề nghị ghi · 1920×1080
- `demo/telegram-latecomer.png` — Ai đó tham gia cuộc trò chuyện thoại đang được ghi · 1920×1080
- `demo/telegram-recording.png` — Ghi mọi người trong cuộc trò chuyện thoại, không chia sẻ màn hình · 1920×1080
