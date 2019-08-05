const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin  } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// common config options used by both electronMainConfig and indexConfig
const commonConfig = {
  mode: 'development',
  target: 'electron-renderer',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.(ts|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}

// config options for webpack to build electron-main.ts file
const electronMainConfig = Object.assign({}, commonConfig, {
  name: 'electron-main',
  entry: './src/electron-main.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'electron-main.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})

// config options for webpack to build index.ts file
const indexConfig = Object.assign({}, commonConfig, {
  name: 'index',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
})

module.exports = [
  // electron comes first since config includes dest dir clean plugin
  electronMainConfig,
  indexConfig
]
