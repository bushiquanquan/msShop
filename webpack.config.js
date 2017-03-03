module.exports = {
    entry: __dirname + '/app/entry.js',
    output: {
        // __dirname当前模块文件所在目录的完整绝对路径
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css/, loader: 'style!css'}
        ]
    }
};