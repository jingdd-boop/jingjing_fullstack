function Cat(name,color) {
  //new的过程1、一定会执行构造函数Cat 2、得到this -> return this 3、prototype 原型对象
  //大量执行会耗费内存
  //因此 要使用 prototype
  this.name = name; //指向实例
  this.color = color;
  // prototype要生成的原因
  // this.eat = function() {
  //   console.log('老鼠');
  // }
}

Cat.prototype.eat = function () {
  console.log("老鼠")
}
Cat.prototype.type = '猫科动物';
//写在prototype上的东西，可以通过实例拿到


//实例化
//new 的执行过程

var cat1 = new Cat("金金","黄色");
var cat2 = new Cat("浩浩","黑色");

console.log(cat1.constructor == cat2.constructor);//构造函数 

console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);

cat1.eat();

