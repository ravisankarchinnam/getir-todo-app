const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#5d3ebc",
              "@heading-color": "#5d3ebc",
              "@text-color": "#5d3ebc",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
