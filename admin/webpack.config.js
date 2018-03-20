// const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: './src/index.html',
    //         filename: './index.html'
    //     })
    // ],
    devServer: {
        port: 3001,
        historyApiFallback: true,
    }
};
