var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if(flag){
  console.log(sum(30, 20));
}
// 导出方式一
export {flag, sum}

// 导出方式二
export var name = '小灰灰';
export var age = 2;

// 导出函数和类
export function mul(num1, num2) {
  return num1 + num2
}
export class Person {
  run(){
    console.log('在左路');
  }
}
// export default
const address = '北京市'
export default address