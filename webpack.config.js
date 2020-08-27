const fs = require('fs');
const path = require('path');
const entries = fs
  .readdirSync('./src')
  .filter((file) => file.match(/.*\.ts$/))
  .reduce((entries, filename) => {
    const name = filename.split('.')[0];
    entries[name] = path.join(__dirname, 'src', filename);
    return entries;
  }, {});

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    ...entries,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: ['/node_modules'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
