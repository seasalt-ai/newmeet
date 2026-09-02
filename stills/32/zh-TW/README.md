# Video 32 stills — zh-TW

(no shotlist)

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ video: '32', key: 'post-stop-share', locale: 'zh-TW' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/post-stop-share.png` — 一停止錄音，SeaMeet 就自己把分享對話框打開，錄音也已經存好了 · 1920×1080
- `product/share-dialog.png` — 分享對話框：用 email 加入的成員、把連結權限設為任何擁有連結的人，以及「需登入才能檢視」的說明 · 1920×1080

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

_(none rendered)_
