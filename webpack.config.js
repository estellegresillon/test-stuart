const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      port: 3000,
      open: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        filename: "index.html",
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        components: path.resolve(__dirname, "src/components/"),
        model: path.resolve(__dirname, "src/model/"),
        store: path.resolve(__dirname, "src/store/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: {
                compilerOptions: {
                  module: "es6",
                },
              },
            },
          ],
        },
      ],
    },
  };
};
