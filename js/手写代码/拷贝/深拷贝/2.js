var obj = {
  a:{
    b:"hello",
    c:21
  }
};

var initialObj = Object.assign({},obj);
initialObj.a.b="jing"
console.log(initialObj)
console.log(obj);

//会影响原数组