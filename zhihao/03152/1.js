var a = function() {
  this.b = 3;
  console.log(this)
}
a.prototype.b = 4;
let c = new a();
var b = 11;
a();
console.log(b);
console.log(c.b);