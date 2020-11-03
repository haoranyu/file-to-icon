/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const moduleVal = {
  rules: [
    {
      test: /\.(svg)$/,
      use: [
        {
          loader: 'url-loader'
        }
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

const config = [
  {
    entry: './src/index.js',
    output: {
      libraryTarget: 'umd',
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new ESLintPlugin({
        files: './src/*'
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules/vscode-icons/icons/*.svg'),
            to: path.resolve(__dirname, 'src/icons/'),
            toType: 'dir',
            context: './node_modules/vscode-icons/icons/'
          },
        ],
      }),
    ],
    module: moduleVal,
  },
];

module.exports = config;
