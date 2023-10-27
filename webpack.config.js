const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    gameboard: './src/gameboard.js',
    gameLogic: './src/gameLogic.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        use: 'svg-inline-loader',
      },
    ],
  },
};
