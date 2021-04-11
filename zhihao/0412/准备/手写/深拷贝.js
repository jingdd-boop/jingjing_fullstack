function deepClone(obj) {
  if(typeof obj !== 'object' && obj !== null) {
    throw new Error('obj is not object')
  }
  let res = Array.isArray(obj) ? [] : {}
  if(obj && typeof obj === 'object') {
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        if(obj[key] && typeof obj[key] === 'object') {
          res[key] = deepClone(obj[key]);
        } else {
          res[key] = obj[key];
        }
      }
    }
  }
  return res;
}

//解决循环引用,使用weapmap
// function deepClone(obj,hash = new WeakMap()) {
//   if(typeof obj !== 'object' && obj !== null) {
//     throw new Error('obj is not object')
//   }
//   let res = Array.isArray(obj) ? [] : {}

//   if(hash.has(obj)) {
  //如果hash里面有obj这个值，就在把这个值拿出来
//     return hash.get(obj);
//   }

//   hash.set(obj,res)
//设置一个值 obj，res

//   if(obj && typeof obj === 'object') {
//     for(let key in obj) {
//       if(obj.hasOwnProperty(key)) {
//         if(obj[key] && typeof obj[key] === 'object') {
//           res[key] = deepClone(obj[key],hash);
//         } else {
//           res[key] = obj[key];
//         }
//       }
//     }
//   }
//   return res;
// }

var b={gg:123,ff:a}
var a={
    c:{
        k:1,
        k2:2
    },
    d:{
        d1:[1,2],
        d2:b,
        d3:{
            f1:'kkk'
        }
    }
}

let cop1 = deepClone(a)
let cop2 = deepClone(b)
console.log(cop1,cop2);
