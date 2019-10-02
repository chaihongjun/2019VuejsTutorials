/*  生成环境需要的 */

//提取CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 去重CSS
const CssCleanupPlugin = require('css-cleanup-webpack-plugin');
//压缩CSS
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//压缩JS
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//压缩图片
const ImageminPlugin = require("imagemin-webpack");
//引入base配置
const baseConfig = require('./base.config');
const webpackMerge = require('webpack-merge');

//融合base配置和生产配置
module.exports = webpackMerge(baseConfig, {
    plugins: [
        new HtmlWebpackPlugin({
            /* html优化 */
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        /* css优化 */
        // CSS提取
        new MiniCssExtractPlugin({
            filename: '[name].css',
            // chunkFilename: '[id].css',
        }),
        //去重CSS 
        new CssCleanupPlugin(),
        //压缩CSS 
        new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }],
            },
            canPrint: true
        }),
        //js优化
        //图片优化
        new ImageminPlugin({
            bail: true,
            cache: '../../imgcache',
            imageminOptions: {
                filter: (source, sourcePath) => {
                    if (source.byteLength < 8192) {
                        return false;
                    }
                    return true;
                },
                plugins: [
                    ["gifsicle", {
                        interlaced: true,
                        optimizationLevel: 9
                    }],
                    ["jpegtran", {
                        progressive: true,
                        optimizationLevel: 9
                    }],
                    ["optipng", {
                        optimizationLevel: 9
                    }],
                    [
                        "svgo", {
                            plugins: [{
                                removeViewBox: false
                            }]
                        }
                    ]
                ]
            }
        })
    ],
    optimization: {
        minimizer: [
            //JS压缩
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                cache: '../../jscache/',
                parallel: true,
            })
        ]
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../../',
                }
            }]
        }, {
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
        }]
    },

})