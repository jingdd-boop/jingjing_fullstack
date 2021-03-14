function newFun(func, ...args) {
  if (typeof func !== "function") {
    throw new TypeError("is no function");
  }
  let obj = new Object();
  obj.__proto__ = Object.create(func.propotype);
  const res = func.apply(obj, args);

  const isObject = typeof res === "object" && res !== null;
  const isFunction = typeof res === "function";
  return isObject || isFunction ? res : obj;
}
