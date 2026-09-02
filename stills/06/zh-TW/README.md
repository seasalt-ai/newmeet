# Video 06 stills — zh-TW

record-telegram-call · /record/telegram

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'telegram', key: 'telegram-ai-summary', locale: 'zh-TW' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/telegram-ai-summary.png` — 摘要、決定與行動項目 (cropped to the app window) · 1712×928
- `product/telegram-memory.png` — 會議記憶 — 人物、組織、主題 (cropped to the app window) · 1712×928
- `product/telegram-seek.png` — 點擊逐字稿的時間戳，播放器隨即跳轉 (cropped to the app window) · 1712×928
- `product/telegram-transcript.png` — 三位發言者，逐一區分，並附時間戳 (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/telegram-bots-cant-join.png` — 沒有會議連結可加入的記錄工具 · 1920×1080
- `demo/telegram-detected.png` — SeaMeet 偵測到 Telegram 語音聊天並詢問是否錄音 · 1920×1080
- `demo/telegram-latecomer.png` — 有人加入一場已經在錄音的語音聊天 · 1920×1080
- `demo/telegram-recording.png` — 錄下語音聊天中的每一個人，不用分享螢幕 · 1920×1080
