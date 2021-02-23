function sub_curry(fn) {
  var args = [].slice.call(arguments,1);
  return function() {
    var newArg = args.concat([].slice.call(arguments));
    return fn.apply(this,newArg);
  }
}

function curry(fn,length) {
  legth = length || fn.length;
  var slice = Array.prototype.slice;
  return function() {
    if(arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this,combined),length - arguments.length);
    } else {
      return fn.apply(this,arguments);
    }
  };
}

var fn = curry(function(a,b,c) {
  return [a,b,c];
});

fn("a","b","c");
fn("a","b")("c");
fn("a")("b")("c");
fn("a")("b","c");
