const path = require('path');
module.exports = {
  entry:'./src/main.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
        }
    ]
  }
}