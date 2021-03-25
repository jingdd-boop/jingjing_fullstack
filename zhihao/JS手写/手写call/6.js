Array.prototype.call = function(context,...arg) {
  context = context || window;

  let fn = Symbol('fn');
  context[fn] = this;
  let res = context[fn](...arg);
  delete context[fn];
  return res
}