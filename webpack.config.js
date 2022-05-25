const path = require('path');
const HTMLPlugin= require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins:[
      new HTMLPlugin({
          template: path.join(__dirname, "./src/index.html")
      })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },

    compress: true,
    port: 3010, // default 8000
  },
};