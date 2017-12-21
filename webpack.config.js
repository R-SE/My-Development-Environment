const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js'
    ]
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
    // publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
      }﻿,
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin({
        filename: "main.css",
        disable: false,
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new CleanWebpackPlugin(['dist'])
    ]
  }

//  devServer: {
//         contentBase: "./src",
//         inline: true,
//         hot: true,
//         port: 8080
//     },
