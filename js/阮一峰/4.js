//函数是天生可以复用的
// var Cat = {
//   name:'jingjing',
//   color:'red',
// }

function Cat(name,color) {
  return {
    name,
    color
  }
}
var cat1 = Cat('金金','黄色');
var cat2 = Cat('浩浩','红色');
