function deepClone(obj) {
  if(typeof obj !== 'object' && obj !== null) {
    throw new Error('obj is not obj')
  }
  let newobj = []
  if(obj && typeof obj === 'object') {
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        if (obj[k] && typeof obj[k] === 'object') {
          newobj[k] = deepClone(obj[k])
        } else {
          newobj[k] = obj[k]
        }
      }
    }
  }  
  return newobj;
}

var obj1 = {
  a:1,
  b:[1,2,3]
}
obj2 = deepClone(obj1);
obj2.b.push(1);
console.log(obj1,obj2);