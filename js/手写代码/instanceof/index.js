//类和实例
//constructor

const instanceOf = (left,right) => {
  var O = right.prototype;
  left = left.__proto__;
  while(true){
    if(left === null) return false
    if (left === O) {
      return true
    } 
    left = left.__proto__;
  }
  // console.log(O);//构造函数的原型对象
  // if(left.__proto__ == O) {
  //   return true
  // } else return false
}



function Animal(name) {
  this.name = name;
}

//原型对象
Animal.prototype = {
  canRun: function() {
    console.log('can run');
  }
}

//继承关系
function Cat () {
  this.speak = 'mao'
}
Cat.prototype = new Animal('miaomaio');
//将Animal 的实例交给Cat 子类构造函数prototype属性作为原型对象
Cat.prototype.constructor = Cat;

//实例
var dog = new Animal('小黄');
// dog.canRun()
// console.log(dog instanceof Animal) //true
// console.log(Animal.prototype);
// console.log(dog.__proto__);
// console.log(dog.__proto__ === Animal.prototype);


console.log(instanceOf(dog,Animal)) 

const garfield = new Cat('加菲猫');
//js 对象会沿着原型链，查找，继承的一种方法
console.log(instanceOf(garfield,Cat))
console.log(garfield.__proto__.__proto__ === Animal.prototype)
console.log(instanceOf(garfield,Animal))
