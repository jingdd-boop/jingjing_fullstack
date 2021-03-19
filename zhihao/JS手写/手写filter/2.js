Array.prototype.filter = function(callback,thisArg) {
  if (this == undefined) {
    throw new TypeError("this is null or not undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError("this is not a function");
  }
  let res = [];
  let O = Object(this);
  let len = O.length >>> 0;

  for (let i = 0;i < len;i++) {
    if(i in O) {
     if(callback.call(thisArg,O[i],i,O)){
       res.push(O[i])
     }
    }
  }

}