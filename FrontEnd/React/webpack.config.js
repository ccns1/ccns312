const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/index',

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/'],
            },
        ],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/', // 새로고침을 할 시 페이지 유지
    },

    devServer: {
        historyApiFallback: true, // 새로고침을 할 시 페이지 유지
        contentBase: path.join(__dirname, 'dist'), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
        compress: true,
        port: 8888,
    },

    plugins: [
        new HtmlWebpackPlugin({
            // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
            template: `./public/index.html`,
        }),
    ],
};
