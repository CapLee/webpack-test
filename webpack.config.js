const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Minify = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['env']
          // }
        }
      },
      {
        test: /\.(less|css)$/,
        use: [Minify.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: path.resolve(__dirname, './src/img'),
        use: ["file-loader?limit=8192&name=img/[name].[ext]"]
      }
    ]
  },
  
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    
    new Minify({
      filename: 'index.css'
    })
  ]
};
