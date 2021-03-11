Function.prototype.call1 = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const fn = Symbol("fn");
  context[fn] = this;
  const res = context[fn](...args);
  console.log(typeof context[fn]);
  delete context[fn];
  return res;
};

function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call1(this, name, price);
  this.category = "food";
}
console.log(new Food("cheese", 5).name);
