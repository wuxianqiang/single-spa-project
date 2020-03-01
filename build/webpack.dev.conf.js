const webpack = require('webpack')
const path = require('path')
const Merge = require('webpack-merge')
const dir = process.cwd()
const baseConfig = require('./webpack.base.conf')

module.exports = Merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(dir, '../home/project1'),
    library: 'ELEMENT',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development')
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: path.resolve(dir, 'src'),
        options: {
          formatter: require('eslint-friendly-formatter'),
          cache: true,
          emitWarning: true,
          emitError: true
        }
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        loader: 'url-loader',
        options: {
          esModule: false
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          esModule: false
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 8000,
  //   hot: true,
  //   open: true,
  //   overlay: {
  //     errors: true,
  //     warnings: true
  //   },
  //   contentBase: path.resolve(dir, 'dist')
  // },
  cache: true
})
