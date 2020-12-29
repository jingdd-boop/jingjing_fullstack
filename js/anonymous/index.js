//1、事件执行函数，叫什么名字无所谓
// addEventListener('click', () => {

// });

//2、函数定义，不适合匿名函数的使用场景
// function () {
  
// }

//3、匿名函数
// const funcA = function () {
//   let foo = 10;
//   let bar = 2;
//   console.log(foo * bar);
// }
// funcA();

//4、立即执行函数
let res = (function () {//匿名函数
  // let foo = 10;
  // let bar = 2;
  //console.log(foo * bar);
  return  foo * bar
})(20,3)
console.log(res)
//foo bar 值传过去
//交给外界怎么办