var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: {
      main: SRC_DIR + '/app'
    },
    output: {
        path: DIST_DIR,
        filename: 'app/[name].js',
        // publicPath: '/app/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader',
                  use: ['css-loader', 'resolve-url-loader', 'sass-loader']})
                  // use: ['css-loader?url=false', 'resolve-url-loader', 'sass-loader?sourceMap']})
            },
            {
              test: /\.html$/,
              use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: '../'
                        }
                    }
                ]
            }
        ]
    },

    stats: {
        colors: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new ExtractTextPlugin("css/[name].css"),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    watch: false
};
