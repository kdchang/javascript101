import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = [
  name: 'js',
  entry: {
    main: [
      './src/scripts/main.js',
    ]
  },
  output: {
    path: `${__dirname}/dist/scripts`,
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$\\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/src/scripts`,
        exclude: /bundle\.js$/
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  devServer: {
    inline: true,
    port: 8008,
  }
]
