const deepClone = function (obj) {
  let newobj = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object" && obj !== null) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          newobj[key] = deepCopy(obj[key]);
        } else {
          newobj[key] = obj[key];
        }
      }
    }
  }
  return newobj;
};

let a = [1, 2, 3, 4];
b = deepClone(a);
b[3] = 0;
console.log(a, b);
