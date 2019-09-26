const htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    filename: "./scripts/main.js"
  },
  devServer: {
    contentBase: "./"
  },
  module: {
    rules: [
      // end of sass loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      // image loader
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
      // end of image responsive loader
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer("last 2 versions")]
      }
    }),
    new CleanWebpackPlugin(),
    new htmlwebpackplugin({
      template: "html/index.html",
      title : "IOGSF"
    }),
    new OptimizeCSSAssetsPlugin(),
    new TerserJSPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/Dist"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
