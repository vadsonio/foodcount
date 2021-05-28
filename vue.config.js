module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/main.scss";`
      }
    }
  },
  publicPath: '/foodcount/docs/'
};