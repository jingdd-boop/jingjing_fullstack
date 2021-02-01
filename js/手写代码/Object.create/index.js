// 类 抽象 实例化 对象
//js里面没有类 只有对象 基于原型式的
//prototype __proty__
//person 就是抽象类
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log('my name is ${this.name}.Am I human ? ${this.isHuman}')
  }
}

const me = Object.create(person)
console.log(me.__proto__);