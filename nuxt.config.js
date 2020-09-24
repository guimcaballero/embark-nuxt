export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Embark Studios Open Source | embark.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discover open source repositories in Rust, Go, and more from Embark Studios' },
      { 'http-equiv': "X-UA-Compatible", content:"IE=edge"},
      { hid: 'keywords', name: 'keywords', content: 'open source, sponsorship, rust' },

    // Open Graph Metadata
      { property:"og:title", content:"Embark Studios Open Source" },
      { property:"og:description", content:"Discover open source repositories in Rust, Go, and more from Embark Studios" },
      { property:"og:type", content:"website" },
      { property:"og:url", content:"https://embark.dev" },
      { property:"og:image", content:"https://embark.dev/img/code.jpg" },
      { name:"twitter:card", content:"summary_large_image" },
      { name:"twitter:site", content:"@EmbarkStudios" },
      { name:"twitter:image", content:"https://embark.dev/img/code.jpg"},
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },{ rel: 'stylesheet',  href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/mixinMethods.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
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
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
