const path = require('path');
module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 当index不在dist文件夹内时，需要配置
    publicPath:'dist/'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载
        // style-loader负责将样式添加到DOM中
        use: ['style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader',  "less-loader"]
        },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
            options: {
              limit: 8192,
              // 规定文件的名字
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      // ES6转ES5
      // npm install babel-loader@7 babel-core babel-preset-es2015 --save-dev
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    },
      {
        test: /\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}