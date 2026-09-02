# Video 31 stills — ko

free-recorder

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ video: '31', key: 'live-transcription', locale: 'ko' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/live-transcription.png` — 녹음 중 실시간 자막: 녹음 바 아래 CC 스트립과, 말하는 대로 채워지는 전사 · 1600×900
- `product/recording-modes.png` — 무엇을 녹음할지 선택: 소리만, 화면 전체, 창 하나, 또는 영역 · 1600×900

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

_(none rendered)_
