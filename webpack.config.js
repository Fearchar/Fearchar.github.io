const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      lib: path.resolve(__dirname, 'src/lib/'),
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      content: path.resolve(__dirname, 'src/content/')
    }
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      /* todo: fm - remove when scss is removed*/
      {
        test: /\.s(a|c)ss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
