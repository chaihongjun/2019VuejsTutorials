//开发部分需要的
//引入base配置
const baseConfig = require('./base.config');
const webpackMerge = require('webpack-merge');
//融合base配置和开发配置
module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: '../../dist',
        open: true,
        inline: true,
    }
})