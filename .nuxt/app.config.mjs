
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/macbookair/Documents/GitHub/theF2E2023Campaign/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "bb542d33-c0d1-44bd-9e4e-15a5499b1a67"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
