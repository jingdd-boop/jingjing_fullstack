Array.prototype.push = function(...item) {
  let O = Object(this);
  let len = this.length >>> 0;
  let arglen = item.length >>> 0;

  if(len + arglen > 2 ** 53 -1) {
    throw new TypeError("The number of array is over the max value")
  }

  for (let i = 0;i < arglen;i++) {
    O[len + i] = item[i];
  }

  let newlen = len + arglen;
  O.length = newlen;
  return newlen;
}