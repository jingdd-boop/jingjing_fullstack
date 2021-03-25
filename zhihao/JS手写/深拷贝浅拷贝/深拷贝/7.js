function deepClone(obj) {
  if (typeof obj !== "object" && obj !== null) {
    throw new Error();
  }
  let newObj = [];
  if (obj && typeof obj === "object") {
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        if (obj[k] && typeof obj[k] === "object") {
          newObj[k] = deepClone(obj[k]);
        } else {
          newObj[k] = obj[k];
        }
      }
    }
  }
  return newObj;
}
var obj1 = {
  a: 1,
  b: [1, 2, 3],
};
obj2 = deepClone(obj1);
obj2.b.push(1);
console.log(obj1, obj2);
