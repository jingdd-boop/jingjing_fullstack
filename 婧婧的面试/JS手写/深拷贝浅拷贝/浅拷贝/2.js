//对象的引用传值 其实就是一个浅拷贝

function simpleClone(initObject) {
  var obj = {};
  for (var i in initObject) {
    obj[i] = initObject[i];
  }
  return obj;
}

var obj = {
  a: "hello",
  b: ["a", "b"],
};
var cloneObj = simpleClone(obj);
cloneObj.a = "你好";

console.log(obj.a);
