// webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'andyview.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'AndyView',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
      // 配置其他loader，如css-loader、file-loader等
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // 单独提取css文件
    new MiniCssExtractPlugin({
      filename: 'andyview.css'
    })
  ],
  externals: {
    vue: 'Vue'
  }
}
