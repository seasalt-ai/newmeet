# Video 07 stills — zh-TW

record-wechat-call · /record/wechat

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'wechat', key: 'wechat-ai-summary', locale: 'zh-TW' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/wechat-ai-summary.png` — 用你自己的語言寫的摘要、決議與待辦事項 (cropped to the app window) · 1712×928
- `product/wechat-memory.png` — 會議記憶 — 人物、組織、主題 (cropped to the app window) · 1712×928
- `product/wechat-mixed-transcript.png` — 同一份逐字稿同時收錄中文與英文，並附時間戳 (cropped to the app window) · 1712×928
- `product/wechat-seek.png` — 點擊逐字稿的時間戳，播放器隨即跳轉 (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/wechat-call-running.png` — 一通已經在進行的 WeChat 通話，沒有任何東西在錄 · 1920×1080
- `demo/wechat-prompt.png` — 通話一開始，SeaMeet 就問你要不要錄 · 1920×1080
- `demo/wechat-recording.png` — 雙方通話都在錄，不用分享螢幕 · 1920×1080
