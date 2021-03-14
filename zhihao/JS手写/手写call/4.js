Function.prototype.call1 = function(context,...args) {
  var context = context || window;
  let fn = Symbol('fn');
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];
  return res;
}


function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call1(this, name, price);
  this.category = "food";
}
console.log(new Food("cheese", 5).name);
