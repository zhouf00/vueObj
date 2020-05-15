import {flag} from "./aaa.js";

if(flag){
  console.log('小明是天才');
}

// 导入export定义的变量
import {name, age} from "./bbb.js";

console.log(name, age);

// 导入函数和类
import {mul, Person} from "./aaa.js";

console.log(mul(20, 100));
const f = new Person();
f.run()

// 导入默认导出的
import addr from "./aaa.js"

console.log(addr);


// 统一导入
import * as aaa from "./aaa.js"
const p = new aaa.Person()
p.run()