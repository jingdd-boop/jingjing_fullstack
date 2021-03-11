//apply 改变this的指向
Function.prototype.apply1 = function(context,args) {
  context = context || window;
  if(typeof this !== 'function') {
    throw new TypeError('error')
  }
  console.log(this)
  const fn = Symbol('fn');
  
  context[fn] = this
  const res = context[fn](...args);
  delete context[fn];
  return res;
}
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply1(this,numbers);
console.log(max);
// expected output: 7