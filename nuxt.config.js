require('dotenv').config()
const baseUrl = process.env.URL || 'http://localhost:8888'
const clientId = process.env.CLIENT_ID || 'CLIENT ID';
const clientSecret = process.env.CLIENT_SECRET || 'CLIENT SECRET';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Env (https://nuxtjs.org/api/configuration-env/)
  env: { baseUrl, clientId, clientSecret },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '[*] Hacktoberfest Repository Checker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hacktoberfest Repository Checker - Unofficial Site. Hacktoberfest presented by DigitalOcean',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Hacktoberfest Repository Checker',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Check if a project takes part in Hacktoberfest this year by looking up their repository URL.',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'hacktoberfest.ninja',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: baseUrl + '/assets/images/OpenGraph.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css', '@/assets/fonts/inter/inter.css'],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue-moment.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: baseUrl, // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: baseUrl,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: baseUrl,
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
