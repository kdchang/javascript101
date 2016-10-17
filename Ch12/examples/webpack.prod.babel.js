import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = [{  
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
  },  
}, {
  name: 'css',
  entry: {
    styles: [
      './src/styles/main.scss',
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.css',
  },  
  module: {
    loaders: [        // ...
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css', {
        allChunks: true
    })
  ]
}]
