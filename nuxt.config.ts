// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // SSR configuration for Amplify
  ssr: true,
  
  // Nitro configuration for Amplify deployment
  nitro: {
    preset: 'node-server'
  },

  // App configuration
  app: {
    head: {
      title: 'ShopHub - Premium E-Commerce',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Your destination for premium products and exceptional service' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Vite configuration to handle AWS SDK
  vite: {
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser',
      }
    },
    optimizeDeps: {
      exclude: ['aws-amplify']
    }
  }
})
