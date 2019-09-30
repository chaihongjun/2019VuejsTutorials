/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-30 09:11:06
 * @LastEditTime: 2019-09-30 09:58:11
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
const path = require("path");
const webpack = require("webpack");

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "BannerPlugin的使用",
      template: "./src/index.html"
    }),

    new webpack.BannerPlugin({
      banner:
        "这个是banner plugin,主要是给bundle文件以注释形式添加内容，常用于版权声明）", // 其值为字符串，将作为注释存在
      raw: false, // 如果值为 true，将直出，不会被作为注释
      entryOnly: false // 如果值为 true，将只在入口 chunks 文件中添加
      // test: string | RegExp | Array,
      // include: string | RegExp | Array,
      // exclude: string | RegExp | Array,
    })
  ],

  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",

        options: {
          plugins: ["syntax-dynamic-import"],

          presets: [
            [
              "@babel/preset-env",
              {
                modules: false
              }
            ]
          ]
        }
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },

  devServer: {
    open: true
  }
};
