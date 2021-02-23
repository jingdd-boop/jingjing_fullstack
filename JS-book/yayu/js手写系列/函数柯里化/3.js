//拿fn("a", "b")("c") 为例  分析整个流程
//将上面这个例子简化成fn()() 下面简称fn()为第一轮 fn()()为第二轮
function curry(fn,args) {
  //接收两个参数，一个是传递的函数，和传递过来的参数
  length = fn.length;
  //fn的length个人认为是函数含参，比如下面例子是用到 a,b,c
  console.log(length)//3
  args = args || [];
  console.log(args)
  //第一轮为空 
  //第二轮 [ 'a', 'b' ] 也就是说args是执行fn时传递的参数fn("a", "b")

  //curry再返回一个函数
  return function() {
    //_args = args.slice(0),截取args中的所有元素
    var _args = args.slice(0),arg,i
    console.log(_args)
    //第一轮 [] 为空
    //第二轮 [ 'a', 'b' ]
    console.log(arguments)
    //第一轮开始的时候执行的是fn("a", "b")，此时 [Arguments] { '0': 'a', '1': 'b' } 
    //第二轮 执行 fn("a", "b")("c") 也就是在前一轮的基础上再执行fn("c")
    //此时[Arguments] { '0': 'c' }
    for(i = 0;i<arguments.length;i++) {
      //把参数追加上去
      arg = arguments[i];
      _args.push(arg);
    }
    //第一轮的_args.length为2，因此继续执行curry
    //第二轮_args.length为3 执行fn.apply(this,_args);
    //最后得到 [ 'a', 'b', 'c' ]
    if(_args.length < length) {
      return curry.call(this,fn,_args);
    } else {
      return fn.apply(this,_args);
    }
  }
}

var fn = curry(function(a, b, c) {
  console.log([a, b, c]);
});

// fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]

