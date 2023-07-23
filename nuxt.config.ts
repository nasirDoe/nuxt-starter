/* eslint-disable n/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/eslint-module',
    '@hebilicious/vue-query-nuxt',
    '@unocss/nuxt',
    'nuxt-api-party',
  ],
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
  runtimeConfig: {
    public: {
      apiUrl: '',
    },
  },
})
