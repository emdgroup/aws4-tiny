const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'aws4.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'aws4',
  },
  mode: 'production',
  target: 'web',
  resolve: {
    alias: {
      url: 'url-lite',
      crypto: path.resolve(__dirname, 'src', 'crypto'),
    },
    extensions: ['.jsx', '.js', '.json', '.scss'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'src'),
        enforce: 'pre',
        use: 'source-map-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      sjcl: 'sjcl/core/sjcl',
      Buffer: path.resolve(__dirname, 'src', 'buffer'),
      process: path.resolve(__dirname, 'src', 'process'),
    }),
  ],
};
