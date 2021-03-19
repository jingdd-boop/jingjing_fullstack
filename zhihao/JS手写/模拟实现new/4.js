function _new(func,...args) {
  if(typeof func !== 'function') {
    throw 'func is not function'
  } 

  // let obj = new Object();
  // obj.__proto__ = Object.create(func.prototype);

  const obj = Object.create(func.prototype);
  let res = func.apply(obj,[...args]);

  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;

  // return res && resinstanceof Object ? res : obj;
}