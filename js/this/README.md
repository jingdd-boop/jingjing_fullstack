1、函数的this 调用方式 与运行的环境有关 作用域 上下文环境相关
 函数作用域 scope
2、函数作用域 scope 变量查找？
内部查找这个变量。如果内部有的话，就使用，如果内部没有，就到函数外部去找
函数嵌套，实现闭包的方式 (函数嵌套函数)

//全局
```js
(function() {
  return function() {
    //环境
    //下面也可以访问得到
    this 指当前的运行环境
  }
})()
```

- 差异的本质来自于this的使用
函数运行时的所在环境
- obj.foo 对象的方法
foo 普通函数 运行方式 -> 所在的环境
(window|global|strict)

- 函数的运行环境由什么决定
- 函数创建的时候就决定了
- 闭包
- 内存的骚操作
```js
 function funA() {
   let a = 1;
   return function() {
     console.log(a);
   }
 }
 const fun = funA();
```
