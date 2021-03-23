// //原型对象
// var Jing = {
//   name: function() {
//     console.log('jingda');
//   }
// };

// //实例对象
// var Hao = Object.create(Jing);
// Object.getPrototypeOf(Hao) === Jing;
// Hao.name();
// console.log(Jing.name === Hao.name);

// Object.prototype.a = "jing1";
// Function.prototype.a = "jing2";
// function Person() {};
// var p = new Person();
// console.log(p.__proto__.constructor.__proto__.constructor)
// console.log(p.__proto__.__proto__.constructor)
// // console.log(p.a);
// // console.log(p.constructor);
// // console.log(p.__proto__.__proto__.constructor);

Object.prototype.a = "jing1";
Function.prototype.a = "jing2";
function Preson() {};

var p = new Preson();

console.log(p.constructor);
console.log(p.__proto__.__proto__.constructor);
// console.log(p.__proto__.__proto__)