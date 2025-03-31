const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    app: './src/main.js',
    // app1: './src/app1/main.js',
    // app2: './src/app2/main.js',
  },
  output: {
    path: path.resolve(__dirname, '../app/static/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: '/static/bundles/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new BundleTracker({ filename: '../webpack-stats.json' })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  }
};
