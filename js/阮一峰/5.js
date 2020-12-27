function Cat(name,color) {
  this.name = name; //指向实例
  this.color = color;
}

//实例化
var cat1 = new Cat("金金","黄色");
var cat2 = new Cat("浩浩","黑色");

console.log(cat1.constructor == cat2.constructor);//构造函数 

console.log(cat1 instanceof Cat)
console.log(cat2 instanceof Cat)

