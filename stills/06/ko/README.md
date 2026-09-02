# Video 06 stills — ko

record-telegram-call · /record/telegram

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'telegram', key: 'telegram-ai-summary', locale: 'ko' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/telegram-ai-summary.png` — 요약, 결정, 조치 항목 (cropped to the app window) · 1712×928
- `product/telegram-memory.png` — 회의 메모리 — 인물, 조직, 주제 (cropped to the app window) · 1712×928
- `product/telegram-seek.png` — 전사의 타임스탬프를 누르면 재생 위치가 이동합니다 (cropped to the app window) · 1712×928
- `product/telegram-transcript.png` — 세 명의 화자를 구분해 타임스탬프와 함께 표시 (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/telegram-bots-cant-join.png` — 참여할 회의 링크가 없는 회의록 도구 · 1920×1080
- `demo/telegram-detected.png` — SeaMeet가 Telegram 음성 채팅을 감지하고 녹음을 제안 · 1920×1080
- `demo/telegram-latecomer.png` — 이미 녹음 중인 음성 채팅에 누군가 참여 · 1920×1080
- `demo/telegram-recording.png` — 음성 채팅 참여자 전원 녹음, 화면 공유 없이 · 1920×1080
