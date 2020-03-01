const path = require('path')
// const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const dir = process.cwd()
const config = require('./config');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(dir, 'src/main.js')
  },
  resolve: {
    extensions: [
      '.js', '.vue', '.less', '.css'
    ],
    alias: {
      'src': path.resolve(dir, 'src')
    }
  },
  externals: config.externals,
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: dir,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(dir, 'template.html'),
    //   chunks: ['app']
    // }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(dir, 'manifest.json')
    // }),
    // new AddAssetHtmlPlugin({ filepath: path.resolve(dir, 'dist/vendor.dll.js') }),
    // new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}
