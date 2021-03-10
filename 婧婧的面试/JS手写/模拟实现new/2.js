function newFun(fn,...args) {
  if(typeof fn !== 'function') {
    throw new TypeError('is no function')
  }
  let obj = Object.create(fn);
  let res = fn.apply(obj,arguments);
  let isObject = (typeof res === 'object' && res !== null);
  let isFunction = typeof res === 'function'
  return res = isFunction || isObject ? res : obj;
}
function Preson(name) {
  this.name = name;
}
let p1 = newFun(Preson,'jing');
console.log(p1.name);
console.log(p1.__proto__ === Preson.prtotype)
