# Video 07 stills — ru

record-wechat-call · /record/wechat

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'wechat', key: 'wechat-ai-summary', locale: 'ru' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/wechat-ai-summary.png` — Резюме, решения и задачи на вашем языке (cropped to the app window) · 1712×928
- `product/wechat-memory.png` — Память встреч — люди, организации, темы (cropped to the app window) · 1712×928
- `product/wechat-mixed-transcript.png` — Одна расшифровка с китайским и английским, с тайм-кодами (cropped to the app window) · 1712×928
- `product/wechat-seek.png` — Метка времени в стенограмме перематывает плеер (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/wechat-call-running.png` — Звонок в WeChat уже идёт, и ничего его не записывает · 1920×1080
- `demo/wechat-prompt.png` — SeaMeet спрашивает, как только звонок начинается · 1920×1080
- `demo/wechat-recording.png` — Записываются обе стороны звонка, без демонстрации экрана · 1920×1080
