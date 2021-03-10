Function.prototype.myBind = function(context,...args) {
  if (typeof this !== 'function') {
    throw new Error;
  }
  var self = this;
  return function F() {
    //考虑new的情况
    if(this instanceof F) {
      return new self(...args,...arguments)
    }
    return self.apply(context,[...args,...arguments])
  }
}

function Animal(name, color) {
	this.name = name;
	this.color = color;
}
Animal.prototype.say = function () {
	return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
console.log(cat, cat.say());
if (cat.say() === "I'm a white cat" && cat instanceof Cat && cat instanceof Animal) {
	console.log('success');
}

// Animal { name: 'cat', color: 'white' } I'm a white cat
// success
