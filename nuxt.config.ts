// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@vueuse/nuxt', 
    '@nuxtjs/supabase'
  ],

  tailwindcss: {
    config: {
      plugins: [
        require('@tailwindcss/typography')
      ]
    }
  }
  
})
