// examples/webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
  return path.resolve(__dirname, '', dir)
}

module.exports = {
  mode: 'development',
  entry: resolve('main.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
      // 配置其他loader，如babel-loader等
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    })
  ],
  devServer: {
    port: 8080,
    // 静态资源目录
    static: {
      directory: resolve('../dist')
    }
  }
}
