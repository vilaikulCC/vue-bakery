module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/_variables.scss";
        @import "~@/assets/styles/_mixins.scss";`,
      },
    },
  },
};