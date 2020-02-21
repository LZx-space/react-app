'use strict';
// 多页应用，入口配置和HtmlPlugin设置
const glob = require('glob');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** 
 * @param {Boolean} isEnvDevelopment 是否为开发环境
 * @param {Boolean} isEnvProduction  是否为生产环境
 * @return {JSON} Object.entryMap获取所有页面的入口JS信息；Object.pluginArr获取
 * 入口对应页面的HtmlWebpackPlugin对象
 */
function getMpaConfig(isEnvDevelopment, isEnvProduction) {
    return glob.sync('./src/pages/*/index.js').reduce((result, filePath) => {
        let entryName = filePath.substring(filePath.lastIndexOf('\/pages/') + 7, filePath.lastIndexOf('\/'))
        // 对应每个页面的入口JS信息
        result.entryMap[entryName] = [
            isEnvDevelopment &&
            require.resolve('react-dev-utils/webpackHotDevClient'),
            filePath
        ].filter(Boolean);
        // 每个页面的HtmlWebpackPlugin
        result.pluginArr.push(new HtmlWebpackPlugin(
            Object.assign({}, {
                title: entryName,
                inject: true,
                filename: entryName + '.html',
                template: paths.appHtml,
                chunks: [entryName]
            },
                isEnvProduction ? {
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true,
                    },
                } : undefined
            )
        ));
        return result;
    }, {
        entryMap: {},
        pluginArr: []
    });
}

module.exports = { getMpaConfig };