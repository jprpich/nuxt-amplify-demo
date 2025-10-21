// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'light' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },
  runtimeConfig: {
    // Private keys (only available server-side)
    // apiSecret: '', // NUXT_API_SECRET env variable
    
    // Public keys (available on both client and server)
    public: {
      test: process.env.NUXT_PUBLIC_TEST || 'default value' // Explicitly read from process.env for SSG
    }
  }
})
