# Video 07 stills — ko

record-wechat-call · /record/wechat

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'wechat', key: 'wechat-ai-summary', locale: 'ko' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/wechat-ai-summary.png` — 당신의 언어로 정리된 요약, 결정 사항, 할 일 (cropped to the app window) · 1712×928
- `product/wechat-memory.png` — 회의 메모리 — 인물, 조직, 주제 (cropped to the app window) · 1712×928
- `product/wechat-mixed-transcript.png` — 중국어와 영어가 한 전사에 함께, 타임스탬프와 함께 (cropped to the app window) · 1712×928
- `product/wechat-seek.png` — 전사의 타임스탬프를 누르면 재생 위치가 이동합니다 (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/wechat-call-running.png` — 이미 진행 중인 WeChat 통화, 아무것도 녹음하고 있지 않음 · 1920×1080
- `demo/wechat-prompt.png` — 통화가 시작되는 순간 SeaMeet가 물어봅니다 · 1920×1080
- `demo/wechat-recording.png` — 통화 양쪽을 모두 녹음, 화면 공유 없이 · 1920×1080
