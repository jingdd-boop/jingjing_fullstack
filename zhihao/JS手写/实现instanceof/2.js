const instanceofFunc = function (left,right) {
  if (typeof left !== 'object' || left === null) return false;
  // let proto = Object.getPrototypeOf(left);
  let proto = left.__proto__;
  while(true) {
    if(proto === null) return false;
    if(proto === right.prototype) return true;
    // proto = Object.getPrototypeOf(proto)
    proto = proto.__proto__
  }
}

// 定义构造函数
function C(){}
function D(){}

var o = new C();

console.log(instanceofFunc(o,C))
console.log(instanceofFunc(o,D))