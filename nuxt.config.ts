/* eslint-disable n/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@hebilicious/vue-query-nuxt',
    '@unocss/nuxt',
    'nuxt-api-party',
    'nuxt-typed-router',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
  ],
  extends: ['nuxt-seo-kit'],
  apiParty: {
    endpoints: {
      px: {
        url: process.env.NUXT_PUBLIC_API_URL!,
      },
    },
  },
  vueQuery: {
    queryClientOptions: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
        },
      },
    },
  },
  pinia: {
    autoImports: ['defineStore'],
  },
  runtimeConfig: {
    public: {
      apiUrl: '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
})