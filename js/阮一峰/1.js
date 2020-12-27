// 函数 对象
// js 类型

const arr =[1,2,3];
console.log(typeof(arr));
arr.push(4);
console.log(arr);
const obj = {a:1};
obj.b = 2;

function num() {
  console.log(1)
}
console.log(typeof(num));

//const a = "hello"; //常量，不能改变类型值，否则会报错
//let a; //声明一个变量 undefined 类型未定义
//a = 1; // number类型
//console.log(typeof(a));
//typeof 监测简单类型

// function Cart() {
//   this.type="耳";
// }

// Cart.prototype.sayHello = function() {
//   console.log('miao')
// }