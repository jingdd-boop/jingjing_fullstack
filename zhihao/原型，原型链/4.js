const myNew = function (func, ...args) {
	if (typeof func !== 'function') {
		return new TypeError('this is not a function');
	}
	// 创建一个空对象，指定原型为 func.prototype
	const obj = Object.create(func.prototype);
	// 绑定 this 并执行构造函数内部代码给新对象加上属性
	const result = func.apply(obj, args);
	// 如果构造函数返回非空对象，则返回该对象;否则，返回刚创建的新对象。
	return result && result instanceof Object ? result : obj;
};
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// 用来测试构造函数返回了一个引用数据类型
function Person(name, age) {
	this.name = name;
	this.age = age;
	return {	
    name:'hao',
    age:23
  }
}

// 自己写的new
console.log('myNew');
const jing = myNew(Person, 'jing', 22);
console.log(jing.name,jing.age)

// 原生new
console.log('new');
const hao = new Person( 'jing', 22);
console.log(hao.name,hao.age)