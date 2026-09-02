# Video 32 stills — ru

(no shotlist)

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ video: '32', key: 'post-stop-share', locale: 'ru' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/post-stop-share.png` — Сразу после остановки: SeaMeet сам открывает окно доступа, запись уже сохранена · 1920×1080
- `product/share-dialog.png` — Окно доступа: люди, добавленные по почте, ссылка, открытая всем, у кого она есть, и примечание, что для просмотра нужен вход · 1920×1080

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

_(none rendered)_
