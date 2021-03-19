Array.prototype.reduce = function(callbackFn,initialValue) {
  if(this === null || this === undefined) {
    throw new TypeError("Cannot read property 'reduce' of null");
  }
  if (typeof callback !== "function") {
    throw new TypeError("this is not a function");
  }
  let O = Object(this);
  let len = O.length >>> 0;
  let i = 0
  let acc = initialValue;//reduce方法的第二个参数作为累加器的初始值
  if(acc === undefined) {
    // throw new Error('Each element of the array is empty');
      // 初始值不传的处理
      for (;i < len;i++) {
        if(k in O) {
          acc = O[i];
          k++;
          break;
        }
      }
  }
  for (;i < len;i++) {
    if(k in O) {
       // 注意 reduce 的核心累加器
       acc = callbackFn.call(undefined,acc,O[i],O);
    }
  }
  return acc;
}