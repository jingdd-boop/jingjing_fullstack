//ES5 里面的 Object.create 方法，这个方法接收两个参数：一是用作新对象原型的对象、
//二是为新对象定义额外属性的对象（可选参数）。

//普通对象是怎么实现的继承。

let person = {
  name: "parent4",
  friends: ["p1", "p2", "p3"],
  getName: function () {
    return this.name;
  },
};

let person2 = Object.create(person);
person2.name = "jing";

let person1 = Object.create(person);
person1.friends.push("lucy");

console.log(person2.name);
console.log(person2.name === person2.getName());
console.log(person1.name);
console.log(person2.friends);
console.log(person1.friends);
//最后两个输出结果是一样的，讲到这里你应该可以联想到 02 讲中浅拷贝的知识点，
//关于引用数据类型“共享”的问题，其实 Object.create 方法是可以为一些对象实现浅拷贝的。
/**
 *
jing   
true   
parent4
[ 'p1', 'p2', 'p3', 'lucy' ]
[ 'p1', 'p2', 'p3', 'lucy' ]
 */