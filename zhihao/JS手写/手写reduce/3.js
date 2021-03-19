Function.prototype.reduce = function (callback,initvalue) {
  if(this === null || this === undefined) {
    throw new TypeError("Cannot read property 'reduce' of null");
  }
  if (typeof callback !== "function") {
    throw new TypeError("this is not a function");
  }

  let i = 0;
  let O = Object(this);
  let len = O.length >>> 0;
  let acc = initvalue;

  if(acc === undefined) {
    for (;i<len;i++) {
      if(k in O) {
        acc = O[i];
        k++;
        break;
      }
    }
  }
  for (;i<len;i++) {
    if(k in O) {
      acc = callback.call(undefined,acc,O[i],i,O)
    }
  }

}