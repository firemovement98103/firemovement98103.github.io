const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');
const AWS = require('aws-sdk');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const getS3PluginConfig = isProd => ({
  s3Options: {
    credentials: new AWS.SharedIniFileCredentials({ profile: 'fire' }),
    region: 'us-west-2',
  },
  s3UploadOptions: {
    Bucket: isProd ? 'ficarious.com' : 'dev.ficarious.com',
    ContentEncoding(fileName) {
      return /\.(js)/.test(fileName) ? 'gzip' : null;
    },
    ContentType(fileName) {
      let contentType = null;
      if (/\.js/.test(fileName)) {
        contentType = 'text/javascript';
      }
      if (/\.html/.test(fileName)) {
        contentType = 'text/html';
      }
      return contentType;
    },
    CacheControl: 'max-age=315360000',
  },
  basePath: '',
  directory: 'public',
});

module.exports = {
  entry: './src/index.jsx',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'eval',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js'],
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, use: 'file-loader' },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'image-webpack-loader',
        enforce: 'pre',
      },
      { test: /.svg$/, loader: '@svgr/webpack', options: { configFile: path.resolve(__dirname, '.svgrrc') } },
    ],
  },
  plugins:
    [
      new CopyWebpackPlugin([{
        from: './src/images/favicon-32x32.png', to: path.resolve(__dirname, 'public', 'dist'), flatten: true,
      }]),
      new CopyWebpackPlugin([{
        from: './src/images/logo.png', to: path.resolve(__dirname, 'public', 'dist'), flatten: true,
      }]),
      new CopyWebpackPlugin([{
        from: './src/robots.txt', to: path.resolve(__dirname, 'public', 'dist'), flatten: true,
      }]),
      new CopyWebpackPlugin([{
        from: './src/sitemap.xml', to: path.resolve(__dirname, 'public', 'dist'), flatten: true,
      }]),
    ].concat(...(process.env.NODE_ENV === 'production'
      ? ([
        new CleanWebpackPlugin(),
        new CompressionPlugin({
          test: /\.(js)$/,
          filename: '[path]',
          algorithm: 'gzip',
        }),
        new S3Plugin(getS3PluginConfig(false)),
        new S3Plugin(getS3PluginConfig(true)),
        new HtmlWebpackPlugin({ template: './src/index.html', filename: path.resolve(__dirname, 'public', 'index.html') }),
      ]) : [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new webpack.SourceMapDevToolPlugin(),
      ])),
};
