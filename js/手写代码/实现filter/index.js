Array.prototype.filter = function(callback,thisAry) {
  if (this == undefined) {
    throw new TypeError("this is null or not defined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }

  const res = [];
  //让o称为回调函数的对象传递(强制转换对象)
  const O = Object(this);

  const len = O.length >>> 0;
  for(let i = 0;i < len;i++) {
    if(i in O) {
      if (callback.call(thisAry,O[i],i,O)) {
        res.push(O[i]);
      }
    }
  }
  return res;
}