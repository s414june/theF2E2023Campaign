// https://nuxt.com/docs/api/configuration/nuxt-config
import * as path from 'path'
export default defineNuxtConfig({
  devtools: { enabled: false },
  $meta: {
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }]
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' }]
    }
  },
  css: ["/assets/scss/app.scss"],
  alias:{
    '@': path.resolve(__dirname, 'assets'),
  }
})
