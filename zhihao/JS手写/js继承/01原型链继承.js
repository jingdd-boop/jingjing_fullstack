function Person() {
  this.name = "jing1";
  this.play = [1, 2, 3];
}
function Child() {
  this.type = "child";
}
Child.prototype = new Person();
let child1 = new Child();
let child2 = new Child();
child1.play.push(4);
console.log(child1.play, child2.play);
console.log(child1);
console.log(child1.__proto__.__proto__ === Person.prototype);

//存在的问题就是，两个实例使用的是同一个原型对象，他们的内存空间是共享的
//当一个发生变化的时候，另外一个也随之进行了变化，这就是使用原型链继承方式的一个缺点。
