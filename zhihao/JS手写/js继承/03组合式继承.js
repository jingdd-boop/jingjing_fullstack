function Person() {
  this.name = "jing";
  this.play = [1, 2, 3];
}

Person.prototype.getName = function () {
  return this.name;
};

function Child() {
  Person.call(this);
  this.type = "jing1";
}
//// 第一次调用 Parent3()
Child.prototype = new Person();
// 手动挂上构造器，指向自己的构造函数
Child.prototype.constructor = Child;

var s3 = new Child();
var s4 = new Child();

s3.play.push(4);

console.log(s3.play, s4.play); // 不互相影响
console.log(s3.getName()); // 正常输出'parent3'
console.log(s4.getName()); // 正常输出'parent3'
