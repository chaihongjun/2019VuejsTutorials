/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-30 10:30:40
 * @LastEditTime: 2019-09-30 11:55:02
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
//JS 压缩丑化
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
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
      template: "index.html",

      title: "电影"
    })
  ],
  // 详细配置方式
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   test: /\.js(\?.*)?$/i,
      //   // include: /\/includes/,
      //   // exclude: /\/excludes/,
      //   // chunkFilter 过滤需要丑化的chunk，默认全部丑化
      //   chunkFilter: chunk => {
      //     if (chunk.name === "vendor") {
      //       return false;
      //     }
      //     return true;
      //   },
      //   //  是否启用缓存（使用默认缓存路径node_modules/.cache/uglifyjs-webpack-plugin）
      //   //  cache:true,
      //   //  或者自定义缓存路径
      //   //cache: 'path/to/cache',
      //   //提升JS压缩丑化速度(默认使用os.cpus().length - 1数量的处理器)
      //   parallel: true
      //   // 或则直接指定需要的CPU核心数量
      //   //parallel: 2
      // })
    ]
  },
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
