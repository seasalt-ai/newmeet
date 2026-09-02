# Video 32 stills — ko

(no shotlist)

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ video: '32', key: 'post-stop-share', locale: 'ko' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/post-stop-share.png` — 녹음을 멈춘 직후: SeaMeet이 공유 창을 스스로 열고, 녹음은 이미 저장된 상태 · 1920×1080
- `product/share-dialog.png` — 공유 창: 이메일로 추가한 사람, 링크가 있는 모든 사용자로 설정된 접근 권한, 그리고 보려면 로그인이 필요하다는 안내 · 1920×1080

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

_(none rendered)_
