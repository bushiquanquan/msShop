var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 配置生成Source Maps，选择合适的选项
    devtool: 'eval-source-map',
    entry: __dirname + '/app/entry.js',
    output: {
        // __dirname当前模块文件所在目录的完整绝对路径
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        //  添加压缩文件的版权信息插件
        new webpack.BannerPlugin('Copyright Mr yuan  inc.'),
        // new 一个这个插件的实例，并传入相关的参数
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tpl.html'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};