function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {};

  if(obj && typeof obj === "object") {
    for(key in obj) {
      if(obj.hasOwnProperty(key)) {
        //判断obj子元素是否为对象，如果是，递归复制
        if(obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

let a = [1,2,3,4];
b = deepClone(a);
b[3] = 0;
console.log(a,b)