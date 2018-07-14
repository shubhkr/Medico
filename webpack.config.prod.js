'use strict';

const path = require('path');
const webpack = require('webpack');
const NODE_ENV = 'production';
const SaveAssetsJson = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: '#source-map',

  // Capture timing information for each module
  profile: false,

  // Switch loaders to debug mode
  // debug: false,

  // Report the first error as a hard error instead of tolerating it
  bail: true,

  entry: [
    './client/js/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    pathinfo: true,
    publicPath: '/dist/',
    filename: 'bundle.[hash].min.js',
  },

  resolve: {
    alias: {},
    modules: [
      'web_modules',
      'node_modules',
      'assets',
      'assets/components',
    ],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
  },

  resolveLoader: {
    modules: ["node_modules"],
  },

  plugins: [
    new CleanWebpackPlugin(['public/dist'], {
      verbose: true,
      dry: false,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        ecma: 6,
        mangle: true
      },
      sourceMap: true
    }),
    new SaveAssetsJson({
      path: process.cwd(),
      filename: 'assets.json',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader' // inject CSS to page
        }, {
          loader: 'css-loader' // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: () => // post css plugins, can be exported to postcss.config.js
              [
                precss,
                autoprefixer
              ]
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },
};
