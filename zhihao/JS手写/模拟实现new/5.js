function mynew(fn,...args) {
  if(typeof fn !== 'function') {
    throw new Error('')
  }

  let obj = new Object();
  obj.__proto__ = Object.create(fn.prototype);
  let res = fn.apply(obj,...args);

  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';
  return isFunction || isObject ? res : obj
}