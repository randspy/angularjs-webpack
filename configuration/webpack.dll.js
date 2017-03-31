var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
  entry: {
    angular: ['angular']
  },
  output: {
    filename: '[name].bundle.js',
    path: helpers.root('dll'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path:  helpers.root('dll', '[name]-manifest.json'),
      name: '[name]'
    })
  ]
};
