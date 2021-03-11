function deepCopy(obj) {
  let newObj = Array.isArray(obj) ? [] : {};

  if (obj && typeof obj === "object") {
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (obj[i] && typeof obj[i] === "object") {
          newObj[i] = deepCopy(obj[i]);
        } else {
          newObj[i] = obj[i];
        }
      }
    }
  }
  return newObj;
}

let a = [1, 2, 3, 4];
b = deepCopy(a);
b[3] = 0;
console.log(a, b);
