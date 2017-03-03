module.exports = {
    entry: './entry.js',
    output: {
        // 当前模块文件所在目录的完整绝对路径
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css/, loader: 'style!css'}
        ]
    }
};