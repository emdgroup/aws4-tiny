const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'test'),
  entry: path.resolve(__dirname, 'test', 'index.js'),
  output: {
    filename: 'aws4-test.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'aws4test',
  },
  mode: 'production',
  devtool: 'nosources-source-map',
  target: 'web',
  optimization: {
    minimize: false,
  },
};
