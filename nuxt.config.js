export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Movie Database: Watch Pirated Movies",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Welcome to Movie Database" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /** Customize the progress-bar color
  */
  loading: {
    color: "#0084B0",
    throttle: 0,
    height: "4px"
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/stylus/app.styl"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		// { src: '~/plugins/vue-aos-animation.js', ssr: false },
    { src: '~/plugins/mixins' },
    { src: '~/plugins/vee-validate' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    credentials: false
  },
  env: {
    baseUrl: process.env.BASE_URL,
    apiURL: process.env.API_URL,
		websiteURL: process.env.WEBSITE_URL,
    imageUrl: process.env.IMAGE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    port: process.env.PORT
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/users/sign_in', method: 'post', propertyName: 'token' },
          logout: { url: '/users/sign_out', method: 'delete' },
          user: { url: '/users/current', method: 'get', propertyName: 'user' }
        }
      }
    }
  }
}
