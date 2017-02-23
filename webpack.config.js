module.exports = {

  entry: ['./src/js/app.js'],
  output: {
    filename: 'public/js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

}
