const path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.txt', '.png', '.*'],
    modules: ['node_modules'],
    alias: {
      css: path.resolve(__dirname, 'css/'),
      js: path.resolve(__dirname, 'js/')
    }
  }
};
