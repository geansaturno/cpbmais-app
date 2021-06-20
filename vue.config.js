module.exports = {
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.host === 'localhost:3000',
          method: 'GET',
          handler: 'CacheFirst',
          options: {
            cacheName: 'meditations',
            expiration: {
              maxAgeSeconds: 6 * 30 * 24 * 60 * 60 // 6 meses
            }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 1 meses
            }
          }
        }
      ]
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
