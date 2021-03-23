// Object.prototype.a = "jing1";
// Function.prototype.a = "jing2";
// function Preson() {};
// var p = new Preson();
// console.log(p.a);
// console.log(p.constructor);
// console.log(p.__proto__.__proto__.constructor);

function Person() {
}
Person.prototype = {}
var p = new Person();

console.log(p.constructor === Person);//false
console.log(p.constructor === Object);//true
