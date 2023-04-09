const path = require('path');

module.exports = {
  entry: './scripts/main.ts',
  devtool: 'inline-source-map',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.txt', '.png', '.*'],
    modules: ['node_modules'],
    alias: {
      styles: path.resolve(__dirname, 'styles/'),
      scripts: path.resolve(__dirname, 'scripts/')
    }
  }
};
