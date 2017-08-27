var path = require('path');
module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname + '/app/temp/scripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}