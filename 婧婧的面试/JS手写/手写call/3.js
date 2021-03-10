function callFun(context,...args) {
  let context = context || window
  let fn = Symbol('fn');
  context[fn] = this
  const res = context[fn](args);
  delete context[fn]
  return res;
}