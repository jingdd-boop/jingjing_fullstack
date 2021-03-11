function instanceofFunc(left,right) {
 // 基本数据类型都返回false
 if (typeof left !== 'object' || left === null) return false;
 let proto = Object.getPrototypeOf(left);
 while (true) {
   if (proto === null) return false;
   if (proto === right.prototype) return true;
   proto = Object.getPrototypeOf(proto);
 }
}

// 定义构造函数
function C(){}
function D(){}

var o = new C();

console.log(instanceofFunc(o,C))
console.log(instanceofFunc(o,D))
// o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype


// o instanceof D; // false，因为 D.prototype 不在 o 的原型链上
