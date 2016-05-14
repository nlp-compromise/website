'use strict';
let path = require('path');
let Webpack = require('webpack');

module.exports = {
  entry: './home.jsx',
  module: {
    loaders: [
      {
        test: /.*\.jsx?$/,
        loaders: [
          'babel?cacheDirectory,presets[]=react,presets[]=es2015'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: './build/demo.tmp.js'
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
