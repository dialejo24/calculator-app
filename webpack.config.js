const path = require('path');

module.exports = {
  entry: './JS/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};