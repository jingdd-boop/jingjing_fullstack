Function.prototype.call2 = function (context, ...arg) {
  // if( this === null) {
  //   throw new TypeError('error')
  // }

  const context = context || window;

  const fn = Symbol("fn");
  context[fn] = this;
  const res = context[fn](...arg);
  delete context[fn];
  return res;
};
