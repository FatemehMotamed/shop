import colors from 'vuetify/es5/util/colors'

export default {
  loading: "~/components/loading.vue",
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  //server: {
    //port: 80, // default: 3000,
    //host: '0.0.0.0' // default: localhost,
    //},
  ssr: false,

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - shop',
    title: 'shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Markazi+Text&display=swap" rel="stylesheet'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v26.0.2/dist/font-face.css' }

    ]
  },

  css: [
    "~/assets/scss/app.scss",
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/fireauth.js",
    "~/plugins/fakeauth.js",
    "~/plugins/simplebar.js",
    "~/plugins/vue-click-outside.js",
    "~/plugins/vuelidate.js",
    "~/plugins/draggable.js",
    "~/plugins/vue-slidebar.js",
    "~/plugins/tour.js",
    "~/plugins/vue-lightbox.js",
    "~/plugins/mask.js",
    "~/plugins/quill-editor.js",
    "~/plugins/chartist.js",
    "~/plugins/vue-googlemap.js",
    "~/plugins/string-filter"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    componenet:'fa',
    icons:{
      solid: true,
      brands: true,
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    // ['nuxt-vuex-localstorage', {
      // localStorage: ['username','token', 'expire'],
      // sessionStorage: ['sfoo']
    // }]

    // 'cookie-universal-nuxt',
  ],

  i18n: {
    locales: ['fa'],
    defaultLocale: 'fa',
    vueI18n: {
      fallbackLocale: 'fa',
      messages: {
        fa: require('./locales/fa.json')
      }
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    rtl:true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },


  "nuxt": {
 "port": 8080
},

//   router: {
//   middleware: ['auth']
// },

 axios: {
    baseURL: 'http://mahankabir.ir/api',

  },

auth: {
  strategies: {
    local: {
      token: {
        property: 'token',
        // required: true,
        // type: 'Bearer',
        // maxAge: 1800,
      },
      user: {
        property: 'user',
        // autoFetch: true
      },
      endpoints: {
        login: { url: '/login', method: 'post' },
        logout: { url: '/logout', method: 'post' },
        user: { url: '/user', method: 'get' }
      }
    },
    cookie: {
    prefix: 'auth.',
    options: {
      path: '/',
      // expires: 1,
    }
  }
  }
}



}
