export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hult-ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // google font
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    /* module options */
    families: {
      CrimsonText: 400,
      Karla: [400, 700]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // apollo for graphql
    // '@nuxtjs/apollo',
  ],

  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'https://hult.local'
  //     }
  //   }
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://hult.local/wp-json/wp/v2'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
