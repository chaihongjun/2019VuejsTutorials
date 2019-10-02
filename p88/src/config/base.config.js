//基础公共配置部分
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../../dist')
    },
    plugins: [new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack配置文件分离（基础，开发，生产）',
            template: 'src/index.html',
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
                test: /\.css$/,
                use: [

                    'style-loader',
                    'css-loader',
                ]
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                    }
                }]
            },
            {
                test: /.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',
                options: {
                    plugins: ['syntax-dynamic-import'],
                    presets: [
                        [
                            '@babel/preset-env',
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
            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    },
}