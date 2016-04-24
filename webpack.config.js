'use strict';
let path = require('path');
let Webpack = require('webpack');

module.exports = {
  entry: './src/main.coffee',
  module: {
    loaders: [
      {
        test: /.*\.jsx$/,
        loaders: [
          'babel?cacheDirectory,presets[]=react,presets[]=es2015'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: './build/build.js'
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    // Avoid publishing files when compilation fails
    new Webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
