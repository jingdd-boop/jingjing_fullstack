Function.prototype.bind1 = function(context,...args) {
  if(typeof this !== 'function') {
    throw Error
  }

  var self = this;
  var fbind = function() {
    if(this instanceof self) {
      self.apply(this);
    } else {
      self.apply(context,args.concat(Array.prototype.slice.call(arguments)))
      //：强制转化arguments为数组格式
    }

    if(this.prototype) {
      fbind.prototype = Object.create(this.prototype)
    }
  }
  return fbind;
}

//首先绑定this
//定义一个函数fbind 
//在这个函数里面 判断，this 是不是在self的原型链上，如果是的话，将self的this绑定过来
//否则，绑定到传过来的参数context，并且加上参数args.concat(Array.prototype.slice.call(arguments))
//返回这个函数