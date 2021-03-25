function jlFunc(fn,timeout) {
  let flag = true;
  return function() {
    if(!flag) return ;
    flag = false;
    setTimeout(() => {
      fn.apply(this.arguments);
      flag = true;
    },timeout)
  }
}