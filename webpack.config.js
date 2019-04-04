const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: ['./src/app'],
  output: {
    filename: 'dist/js/bundle.js',
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: 'style-loader',
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
          },
          {
            // compiles Sass to CSS
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin([
      {
        from: './src/assets',
        to: './dist',
      },
    ]),
  ],
};
