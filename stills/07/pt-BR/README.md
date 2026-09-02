# Video 07 stills — pt-BR

record-wechat-call · /record/wechat

Generated — never hand-edit. `npm run stills:manifest` rebuilds this from the
committed PNGs; `stills.mjs` rewrites it after a re-capture.

Do not build these paths by hand. Ask `findStill()` in
`scripts/video/lib/stills-manifest.mjs`:

```js
findStill({ app: 'wechat', key: 'wechat-ai-summary', locale: 'pt-BR' })
```

## product/ — safe to use as product screenshots
Every pixel is real SeaMeet code rendered from fixtures. Use anywhere: wiki,
docs, marketing, decks. The data is seeded, so do not caption them as a real
user's account.

- `product/wechat-ai-summary.png` — Resumo, decisões e itens de ação no seu próprio idioma (cropped to the app window) · 1712×928
- `product/wechat-memory.png` — Memória de reuniões — pessoas, organizações e temas (cropped to the app window) · 1712×928
- `product/wechat-mixed-transcript.png` — Uma única transcrição com chinês e inglês, com marcações de tempo (cropped to the app window) · 1712×928
- `product/wechat-seek.png` — Um carimbo de tempo da transcrição move o reprodutor (cropped to the app window) · 1712×928

## demo/ — keep inside video or demo context
These contain a stylized recreation of a third-party app. It is deliberately
close enough to read and different enough not to claim to be that brand's UI.
That reads correctly inside a narrated demo; presented as "a screenshot" it
starts implying it IS that product. Do not use these as standalone product
screenshots — `findStill()` will not hand you one unless you ask for
`tier: 'demo'`.

- `demo/wechat-call-running.png` — Uma chamada do WeChat já em andamento, sem nada gravando · 1920×1080
- `demo/wechat-prompt.png` — O SeaMeet pergunta assim que a chamada começa · 1920×1080
- `demo/wechat-recording.png` — Gravando os dois lados da chamada, sem compartilhar a tela · 1920×1080
