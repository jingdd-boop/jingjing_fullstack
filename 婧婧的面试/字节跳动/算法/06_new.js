function newFunc(func,...arg) {
  if(typeof func !== 'function') {
    throw Error
  }
  const obj = Object.create(func);
  const result = func.apply(obj,...arg)

  if(typeof result === 'function' || typeof result === 'object' && result !== null) {
    return result
  } 
  return obj
}


function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log('may name is ${this.name}')
}

const me = newFunc(Person,'jing');
me.sayName();
console.log(me)
