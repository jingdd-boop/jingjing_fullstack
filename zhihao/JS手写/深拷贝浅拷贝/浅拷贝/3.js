var obj = { a: { a: "hello", b: 21 } };
var initObj = Object.assign({}, obj);
//拷贝一个对象 浅拷贝

console.log(initObj);
initObj.a.a = "change";
console.log(obj.a.a);
