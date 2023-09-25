const path = require("path");

module.exports = {
  env: {
    REACT_APP_API_URL: "https://jsonplaceholder.typicode.com"
  },
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, "./node_modules/apexcharts-clevision")
    };

    return config;
  }
};
