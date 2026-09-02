# Video 07 stills — vi

record-wechat-call · /record/wechat

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'wechat', key: 'wechat-ai-summary', locale: 'vi' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/wechat-ai-summary.png` — Tóm tắt, quyết định và việc cần làm bằng ngôn ngữ của bạn (cropped to the app window) · 1712×928
- `product/wechat-memory.png` — Bộ nhớ cuộc họp — con người, tổ chức, chủ đề (cropped to the app window) · 1712×928
- `product/wechat-mixed-transcript.png` — Một bản ghi lời có cả tiếng Trung và tiếng Anh, kèm mốc thời gian (cropped to the app window) · 1712×928
- `product/wechat-seek.png` — Dấu thời gian trong bản phiên âm tua trình phát (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/wechat-call-running.png` — Cuộc gọi WeChat đang diễn ra mà không có gì ghi lại · 1920×1080
- `demo/wechat-prompt.png` — SeaMeet hỏi ngay khi cuộc gọi bắt đầu · 1920×1080
- `demo/wechat-recording.png` — Ghi cả hai bên cuộc gọi, không chia sẻ màn hình · 1920×1080
