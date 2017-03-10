const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

exports.default = {
  context: path.join(__dirname, '/src'),
  entry: {
    app: './index.jsx',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: '1',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              plugins() {
                return [
                  precss,
                  autoprefixer,
                ];
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
};
