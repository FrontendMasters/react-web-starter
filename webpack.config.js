const htmlWebpackPlugin = require("webpack-html-plugin");

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: '[name]-[hash:7].js',
    path: 'dist'
  },
  debug: true,
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'babel', 
          exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    })
  ]
}
