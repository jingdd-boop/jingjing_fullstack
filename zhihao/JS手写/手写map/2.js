Array.prototype.map = function(callbackfn,thisArg) {
  if(this === null || this === undefined) {
    throw new TypeError("Cannot read property 'map' of null");
  }
  if(typeof callbackfn !== 'function') {
    throw new TypeError(callbackfn + ' is not a function')
  }

  let O = Object(this);
  let res = [];

  let len = O.length >>> 0;
  for (let i = 0;i < len;i++) {
    if(i in O) {
      res[i] = callbackfn(thisArg,O[i],i,O)
    }
  }
  return res;
}