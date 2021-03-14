function Person() {
  this.name = "jing";
}

Person.prototype.getName = function () {
  return this.name;
};

function Child() {
  Person.call(this);
  this.type = "child";
}

let child = new Child();
console.log(child);
console.log(child.getName());
//构造函数实现继承的优缺点，它使父类的引用属性不会被共享，优化了第一种继承方式的弊端；
//但是随之而来的缺点也比较明显——只能继承父类的实例属性和方法，不能继承原型属性或者方法。
