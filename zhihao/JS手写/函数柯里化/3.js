const curry = (fn, ...arg) =>
  fn.length <= arg.length
    ? fn(...arg)
    : (..._arg) => curry(fn, ...arg, ..._arg);

function add1(x, y, z) {
  return x + y + z;
}
const add = curry(add1);
console.log(add(1)(2)(3));
