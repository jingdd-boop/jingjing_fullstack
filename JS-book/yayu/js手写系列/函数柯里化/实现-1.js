var curry = function (fn) {
  var args = [].slice.call(arguments,1);
  //改变数组slice方法的作用域，使得this指向arguments对象
  ///call方法的第二个参数表示传递给slice的参数
  //即截取数组的起始位置，这样的话arguments类数组就可以使用数组的方法slice()
  return function() {
    var newArg = args.concat([].slice.call(arguments));
    return fn.apply(this,newArg);
  }
}

function add(a,b) {
  return a + b;
}

var addCurry = curry(add,1,2);
addCurry();

var addCurry = curry(add,1)
addCurry(2);

var addCurry = curry(add)
addCurry(1,2);
