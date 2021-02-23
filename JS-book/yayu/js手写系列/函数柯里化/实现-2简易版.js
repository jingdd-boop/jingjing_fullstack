function sub_curry(fn) {
  return function() {
    return fn()
  }
}

function curry(fn,length) {
  length = length || 4;
  return function() {
    if(length > 1) {
      return curry(sub_curry,--length);
    } else {
      return fn()
    }
  }
}

var fn0 = function() {
  console.log(1);
}

var fn1 = curry(fn0);
fn1()()()() //1

//1、当执行 fn1() 函数返回
curry(sub_curry(fn0));
//相当于
curry(function(){
  return fn0();
})


//2、当执行 fn1()() 函数返回
curry(sub_curry(function(){
  return fn0();
}));
//相当于
curry(function(){
  return (function(){
    return fn0();
  })();
})

//相当于
curry(function() {
  return fn0()
})

//3、当执行 fn1()()() 函数返回
curry(sub_curry(fn0))
// 相当于
curry(function(){
    return fn0()
})

//4、当执行 fn1()()()() 时，因为此时 length > 2 为 false，所以执行 fn()：
fn()
// 相当于
(function(){
    return fn0()
})()
// 相当于
fn0()
// 执行 fn0 函数，打印 1

