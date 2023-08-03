const path = require('path');

module.exports = {
  entry: './JS/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};