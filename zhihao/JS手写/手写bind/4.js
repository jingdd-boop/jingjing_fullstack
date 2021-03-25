Array.prototype.bind = function(context,...arg) {
  if(typeof this !== 'function') {

  }
  let self = this;
  let fncall = function() {
    if(this instanceof self) {
      self.apply(this)
    } else {
      self.apply(context,arg.concat(Array.prototype.slice.call(arguments)));
    }
    if(this.prototype) {
      fncall.prototype = Object.create(this.prototype)
    }
  }
  return fncall;
}