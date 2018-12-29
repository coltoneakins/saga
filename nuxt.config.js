const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Colton Eakins // Modern Front-End Developer // Portfolio and Blog",
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description},
      {name: 'msapplication-TileColor', content: '#000000'},
      {name: 'theme-color', content: '#ffffff'},
      {name: 'msapplication-TileImage', content: '/favicon-144.png'},
      {name: 'msapplication-config', content: '/browserconfig.xml'}
    ],
    link: [
      {rel: 'icon', sizes: '16x16 32x32 64x64', href: '/favicon.ico'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'manifest', href: '/site.webmanifest'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#363636'},
      {rel: 'shortcut icon', href: '/favicon.ico'},
      {rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon-192.png'},
      {rel: 'icon', type: 'image/png', sizes: '160x160', href: '/favicon-160.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96.png'},
      {rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png'},
      {rel: 'apple-touch-icon', href: '/favicon-57.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon-114.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon-72.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon-144.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon-60.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon-120.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon-76.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon-152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180.png'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0000' },

  /*
  ** Global CSS
  */
  css:[
	  '@/assets/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma'
    // Instead, Bulma is compiled in from main.scss above in the Global CSS section
   'nuxt-svg'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
