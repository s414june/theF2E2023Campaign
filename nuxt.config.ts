// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  $meta:{
    meta:[{
      name:"viewport",
      content:"width=device-width, initial-scale=1"
    }]
  },
  css: ['/public/scss/app.scss'],
  
})
