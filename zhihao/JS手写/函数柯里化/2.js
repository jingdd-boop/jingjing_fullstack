const curry = (fn,...arg) =>
  arg.length >= fn.length 
  ? fn(...arg)
  : (..._arg) => curry(fn,...arg,..._arg)


  function add1(x, y, z, g) {
    return x + y + z + g;
  }
  const add = curry(add1);
  console.log(add(1)(2)(3)(5));
  


