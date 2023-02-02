const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: 'development',
   entry: './script.js',
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer: {
      port: 4200
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './index.html',

      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),
      new CopyWebpackPlugin({
         patterns: [{
            from: path.resolve(__dirname, './src/favicon.ico'),
            to: path.resolve(__dirname, 'dist/favicon.ico')
         }]
      })
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            type: 'asset/resource'
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {},
               },
               'css-loader',
               'sass-loader'
            ],
            type: 'asset/resource'
         },
         {
            test: /\.(png|jpg|jpeg|svg|gif)$/i,
            type: 'asset/resource'
         }
      ]
   }
}