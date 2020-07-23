const px2rem = require("postcss-px2rem");

const postcss = px2rem({
  remUnit: 75,
});

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: { plugins: [postcss] },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 转发的目标url
        changeOrigin: true, // 支持跨域
        pathRewrite: {
          "^/api": "",
        },
      },
      "/xhr": {
        target: "https://m.you.163.com",
        changeOrigin: true,
      },
      "/topic": {
        target: "https://m.you.163.com",
        changeOrigin: true,
      },
    },
  },
};
