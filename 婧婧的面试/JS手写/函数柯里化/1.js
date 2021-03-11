const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (..._args) => curry(fn, ...args, ..._args);

function add1(x, y, z, g) {
  return x + y + z + g;
}
const add = curry(add1);
console.log(add(1)(2)(3)(5));
