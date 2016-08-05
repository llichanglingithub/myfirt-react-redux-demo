var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        //loaders: [ 'babel' ],
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loader:  'json',
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=25000' },
      { test: /\.woff$/, loader: 'url?limit=100000' }
    ]
  }
}
