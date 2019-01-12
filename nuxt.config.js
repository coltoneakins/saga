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
      {hid: 'description', name: 'description', content: 'Colton Eakins. Interactive front-end developer. Colton writes blog posts that dive deep into web development.'},
      {name: 'msapplication-TileColor', content: '#000000'},
      {name: 'theme-color', content: '#ffffff'},
      {name: 'msapplication-TileImage', content: '/favicon-144.png'},
      {name: 'msapplication-config', content: '/browserconfig.xml'},
      // Open Graph meta tags
      // Facebook sharing meta tags
      {property: 'og:image:width', content: '279'},
      {property: 'og:image:height', content: '279'},
      {property: 'og:description', content: 'Colton Eakins is a front-end developer who uses modern web development techniques.'},
      {property: 'og:title', content: 'Colton Eakins, Front-End Developer'},
      {property: 'og:url', content: 'https://www.coltoneakins.com/'},
      {property: 'og:image', content: 'https://www.coltoneakins.com/og-image.jpg'},
      // Twitter sharing meta tags
      // Requires @username; TODO: Create Twitter account.
      // LinkedIn sharing meta tags
      {property: 'og:title', content: 'Colton Eakins, Front-End Developer'},
      {property: 'og:image', content: 'https://www.coltoneakins.com/og-image-linkedin.jpg'},
      {property: 'og:description', content: 'Colton Eakins is a front-end developer who uses modern web development techniques.'},
      {property: 'og:url', content: 'https://www.coltoneakins.com/'},
      // Google Search Console site verification meta tag
      {name: 'google-site-verification', content: 'F5GKzEWKqHvKwwjuvH7o4UFW6Knwea0Grba-1Gks4Lg'}
    ],
    link: [
      // Favicon meta tags
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
    ],
    // Add Netlify Identity widget to site
    script: [
      {src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}
    ]
  },


  /*
  ** Set global variable for the baseURL
  */
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://www.coltoneakins.com' : 'http://localhost:3000')
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
    '~/plugins/disquis'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma'
    // Instead, Bulma is compiled in from main.scss above in the Global CSS section
   'nuxt-svg',
   '@nuxtjs/sitemap',
   ['@nuxtjs/google-analytics', {
     id: 'UA-131672294-1'
   }],
   '~/modules/netlify-cms-json-writer'
  ],


  /*
  ** Sitemap Options
  */
  sitemap: {
	      path: '/sitemap.xml',
	      generate: true,
	      routes: [
	          '/',
	          '/portfolio',
	          '/blog',
	          '/contact',
	      ]
   },

  /*
  ** Specify Dyanmic Routes to Generate
  */

 //generate: {
     //routes: [
	     //'/blog/category/html',
	     //'/blog/category/css',
	     //'/blog/category/js',
	     //'/blog/category/python',
	     //'/blog/category/emacs',
	     //'/blog/category/web-scraping',
	     //'/blog/category/vue'
     //]
 //},


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
