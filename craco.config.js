const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

const pathResolve = (url) => path.join(__dirname, url);

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          // "@primary-color": "#",
        },
      },
    },
  ],
};
