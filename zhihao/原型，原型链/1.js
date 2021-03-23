// Object.prototype.a = "jing1";
// Function.prototype.a = "jing2";
// var preson = function() {};
// var p = new preson();
// console.log(p.a);
// console.log(p.constructor);
// console.log(p.__proto__.__proto__.constructor);

// var jingObj = {
//   key: value;
//   //
// }

// var jingObj = new Object();
// jingObj.keu = value;

// var jingObj = {
//   a: 2
// }
// jingObj.a = 2; //2

var jingObj = {
 
}
var newObj = Object.create(jingObj);
console.log(newObj.a);

