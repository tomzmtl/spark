module.exports = {

  entry: ['./src/js/app.js'],
  output: {
    filename: 'public/js/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

}
