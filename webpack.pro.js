
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "eval-source-map", // eval-source-map
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist/build/'),
        publicPath: "dist/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dynamic import js module demo',
            template: './src/index.ejs', // html模板文档地址，webpack默认模板为ejs
            filename: '../index.html', // 由模板生成的文件名和存放位置，可带路径的？需要去官网文档看下
            author: 'tomy',
            // hash: true,
            inject: 'true',// 资源文件注入位置true,body,header,false
            // vendor: /*manifest.name*/'vendor.dll.'+dllchunkname + '.js' //manifest就是dll生成的json
        }),
    ],
    module:{
        rules:[
            {
                // check file rules
                test: /(\.jsx|\.js|\.es6)$/,
                // compile loader
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env","@babel/preset-react"],
                        "plugins": ["syntax-dynamic-import"]
                    }
                },
            },
        ]
    }
};
