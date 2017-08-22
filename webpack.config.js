var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

/*
 *webpack的基本使用
 * 1.创建webpack.config.js文件
 * 2.首先全局安装webpack：npm install -g webpack
 * 3.全局安装开发服务器：npm install -g webpack-dev-server
 * 4.在项目目录下安装：npm install  webpack-dev-server --save
 * 5.在项目目录下安装：npm install  webpack --save
 * 6.运行 webpack   生成bundle.js文件
 * -------------------
 * webpack --watch //js代码有更新立即自动重新编译生成bundle.js文件
 * webpack-dev-server//即时更新
 * webpack-dev-server --content-base src --inline --hot //即时更新
 * */
