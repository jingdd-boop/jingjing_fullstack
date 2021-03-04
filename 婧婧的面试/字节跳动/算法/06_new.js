function newFunc(func,...arg) {
  let obj = {};
  obj.__proto__ = func.prototype;
  let result = func.call(obj,...arg)
  if(typeof result === 'function' || typeof result === 'object' && result !== null) {
    return result
  } 
  return obj
}
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(`may name is ${this.name}`)
}

const me = newFunc(Person,'jing');
me.sayName();
console.log(me)
