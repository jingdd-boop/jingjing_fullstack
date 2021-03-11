Function.prototype.applyFun = function (context, args) {
  context = context || window;
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  let fn = Symbol("fn");
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];
  return res;
};

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.applyFun(this, numbers);
console.log(max);
// expected output: 7
