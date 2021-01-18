// 'use strict' //启动严格模式
var obj = {
  //json object
  bar:1,
  foo:function() {
    //obj 属性
      console.log(this.bar)
  }
}

var foo = obj.foo;
//foo 是一个函数
var bar = 2;

obj.foo(); //this 会指向obj本身
 //函数调用的方式 运作用域 运行环境
 //对象上的方法

 foo(); //普通函数
 //this?

