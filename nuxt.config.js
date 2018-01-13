const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // specify header defaults
  head: {
    title: 'Simple Todos',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
      },
      { hid: 'description', name: 'description', content: 'A simple todos project. Built with 💚 using Nuxt & Nest.' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://vuejs.org/images/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'https://vuejs.org/images/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://vuejs.org/images/icons/favicon-16x16.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.3/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://unpkg.com/vuetify@next/dist/vuetify.min.css' }
    ]
  },
  // customize loading bar
  loading: {
    color: '#4CAF50'
  },
  // specify build directory
  buildDir: 'server/build',
  // specify nuxt source directory
  srcDir: 'client',
  // configure webpack build
  build: {
    extend(config) {
      config.resolve.alias['@vue/ts'] = path.resolve('.', 'client', 'utils', 'vue-ts');
      config.resolve.alias['@vue/utils'] = path.resolve('.', 'client', 'utils');
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        vue: true,
        watch: ['client']
      })
    ],
    vendor: [
      'axios',
      'nuxt-class-component',
      'vue-class-component',
      'vue-property-decorator',
      'vuex-class',
      'vee-validate',
      'vuetify'
    ]
  },
  // specify additional nuxt plugins
  plugins: ['~/plugins/vee-validate', '~/plugins/vuetify'],
  // specify additional nuxt modules
  modules: ['@nuxtjs/axios', '~/modules/typescript']
};
