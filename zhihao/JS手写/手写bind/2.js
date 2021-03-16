Function.prototype.bind1 = function(context,...args) {
  if (typeof this !== 'function') {
    throw new Errror('this is not a function')
  }
  var self = this;
  var fbind = function() {
    if(this instanceof self) {
      self.apply(this)
    } else {
      self.apply(context, args.concat(Array.prototype.slice.call(arguments)))
    }
    if(this.prototype) {
      fbind.prototype = Object.create(this.prototype);
    }
  }
  return fbind
} 

//当这个绑定函数被当做普通函数调用的时候，可以直接用context； 
//而返回的这个之后当做构造函数使用的时候，却是指向这个实例，
//所以this instanceof self为true时，要用this。 因此这里加了这个判断。