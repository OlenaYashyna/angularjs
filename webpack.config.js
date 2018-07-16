const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
      contentBase: `${__dirname}/dist`,
      compress: true,
      port: 9000,
      historyApiFallback: true
    },
    module: {
        rules: [
            { test: /\.html$/, use: [ "html-loader" ] },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },  
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
      ]
  };
  