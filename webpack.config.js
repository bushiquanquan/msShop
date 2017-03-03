module.exports = {
    // 配置生成Source Maps，选择合适的选项
    devtool: 'eval-source-map',
    entry: __dirname + '/app/entry.js',
    output: {
        // __dirname当前模块文件所在目录的完整绝对路径
        path: __dirname + '/public',
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
    }
};