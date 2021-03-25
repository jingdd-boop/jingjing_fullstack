function myNew(fn, ...arg) {
  if (typeof fn !== "function") {
    throw new console.error("cuol");
  }

  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj, arg);

  return res && res instanceof Object ? res : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p = myNew(Person, "jing", 23);
console.log(p.name, p.age);
