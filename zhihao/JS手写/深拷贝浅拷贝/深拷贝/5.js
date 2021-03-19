function deepClone(obj) {
  if(typeof obj !== 'object') {
    throw new Error('not object')
  }

  let res = [];
  if(obj && typeof obj === 'object') {
    for (let k in obj) {
      if(obj.hasOwnProperty(k)){
        if(obj[k] && typeof obj[k] === 'object') {
          res[k] = deepClone(obj[k])
        } else {
          res[k] = obj[k];
        }
      }
    }
  }
  return res;
}

var obj1 = {
  a:1,
  b:[1,2,3]
}

obj2 = deepClone(obj1);
obj2.b.push(1);
console.log(obj1,obj2);