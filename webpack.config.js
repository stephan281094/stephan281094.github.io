const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge')
const path = require('path')
const validate = require('webpack-validator')
const webpack = require('webpack')

const PATHS = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'src')
}

const common = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: PATHS.dist,
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  postcss: function () {
    return [
      require('autoprefixer')
    ]
  }
}

let config
switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(common, {
      module: {
        loaders: [
          {
            test: /\.scss$/,
            include: PATHS.src,
            loader: ExtractTextPlugin.extract('style', 'css', 'sass', 'postcss')
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new ExtractTextPlugin('main.css')
      ]
    })
    break
  default:
    config = merge(common, {
      entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
      ],
      module: {
        loaders: [
          {
            test: /\.scss$/,
            include: PATHS.src,
            loaders: ['style', 'css', 'sass', 'postcss']
          }
        ]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
    })
}

module.exports = validate(config)
