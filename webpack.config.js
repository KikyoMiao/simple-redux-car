module.exports = {
  entry : './entry.js',
  output : {
    path : __dirname,
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {test : /\.js$/, exclude : /node_modules/,loader : 'react-hot!babel'},
      {test : /\.css$/, loader : 'style!css'}
    ]
  }
}
