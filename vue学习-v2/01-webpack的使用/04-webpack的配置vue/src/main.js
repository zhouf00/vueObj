const {add, mul} = require('./js/mathUtils');

console.log(add(20, 30));

import {name, age} from './js/info';

console.log(name, age);

require('./css/normal.css');

require('./css/special.less');

document.writeln('<h2>你好</h2>');

// 使用Vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el:'#app',
  template: '<App/>',
  components: {
    App
  }
})