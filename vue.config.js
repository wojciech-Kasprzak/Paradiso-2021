// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                    @import "@/style/scss/var.scss";
                    @import "@/style/scss/mixins.scss";
                `,
      },
    },
  },
};
