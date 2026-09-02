# Video 01 stills — ko

record-google-meet-60s · /record/google-meet

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'google-meet', key: 'recording', locale: 'ko' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/recording.png` — 사이드 패널에서 녹음 중: 경과 시간, 실시간 자막, 메모 공간 · 424×988
- `product/side-panel-empty.png` — 녹음 전 사이드 패널. 오디오와 화면 선택 항목, 그리고 녹음 버튼 · 424×988

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

_(none rendered)_
