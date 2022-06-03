module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        // modify the options...
        return options;
      });
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/vue01/' // Thay tên repository
  //   : '/',
  // publicPath: '/vue01/',
};
