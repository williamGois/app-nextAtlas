const path = require("path");

module.exports = async ({ config }) => {
  config.resolve.alias = {
    "react-native$": "react-native-web",
  };

  config.module = {
    rules: [
      {
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(
          __dirname,
          "node_modules/react-native-vector-icons"
        ),
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: ["react-native"],
          plugins: ["react-native-web"],
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  };

  return config;
};
