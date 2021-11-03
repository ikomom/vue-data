module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/"
        }
      },
      '/et-market-analysis':{
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        ws: true,
        // pathRewrite: {
        //   "^/et-market-analysis": "/"
        // }
      }
    }
  },
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    })
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  }
}