# Video 01 stills — ja

record-google-meet-60s · /record/google-meet

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'google-meet', key: 'recording', locale: 'ja' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/recording.png` — サイドパネルで録音中：経過時間、リアルタイムの文字起こし、メモを書く欄 · 424×988
- `product/side-panel-empty.png` — 録音前のサイドパネル。音声と画面の選択肢と録音ボタン · 424×988

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

_(none rendered)_
