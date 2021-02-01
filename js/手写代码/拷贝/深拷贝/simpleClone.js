//对象引用传递，其实就是一种浅拷贝、、
//使用新的对象，得到原有对象的所有，并返回
const simpleClone = (inintialObj) => {
  var obj = {};
  for (var key in inintialObj) {
    obj[key] = inintialObj[key];
  }
  return obj
}

var obj = {
  a:"hello",
  c:["Bob","jing","jjj"]
}

var cloneObj = simpleClone(obj)
cloneObj.a = '你好'
console.log(obj.a);