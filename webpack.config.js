const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  entry: {
    entry: './client/js/index.js'
  },
  output: {
    path: path.join(__dirname, '/public/dist/'),
    pathinfo: true,
    publicPath: '/dist/',
    filename: 'bundle.[hash].min.js',
  },
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

  plugins: [
    new HtmlWebpackPlugin({
      template: 'views/index.ejs'
    }),
    new SaveAssetsJson({
      path: process.cwd(),
      filename: 'assets.json',
    })
  ]
};
