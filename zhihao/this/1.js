// console.log(this) //{}

// function f() {
//   "use strict";
//   return this;
 
// }

// console.log(f() === undefined) //true
// console.log(globalThis) //Object [global]

// function constructorFun() {
//   this.name = 'jingda'
//   //当然你可以设置更多值

//   //当函数具有返回对象的return语句时
//   //该对象是new表达式的结果
//   //否则，表达式的结果是当前绑定到this的对象
// }

// function C() {
//   this.a = 37;
// }
// var o = new C();
// console.log(o.a);

// function C2() {
//   this.a = 37;
//   return {a:38};
// }

// o = new C2();
// console.log(o.a);

// var o = {
//   f: function() {
//     return this.a + this.b;
//   }
// };
// var p = Object.create(o);
// p.a = 1;
// p.b = 4;

// console.log(p.f());//5

// var obj = {
//   foo: function () {
//     console.log(this)
//   }
// };
// obj.foo();

// // 情况一
// (obj.foo = function () {
//   console.log(this);
// })()


// var a = {
//   p: 'jing',
//   b: {
//     m: function() {
//       console.log(this.p);
//     }
//   }
// };
// a.b.m() //undefined
// var a = {
//   b: {
//     m: function() {
//       console.log(this.p);
//     },
//     p: 'Hello'
//   }
// };
// var hello = a.b.m;
// hello()
// a.b.m() //'Hello'

// var person = {
//   age:18,

//   sum: function(a) {
//     var f = a => a + this.age;
//     return f(a);
//   },

//   sumCall: function(a) {
//     var f = a => a + this.age;
//     var b = {
//       age:20
//     };
//     return f.call(b,a)
//   }
// }
// console.log(person.sum(1));
// console.log(person.sumCall(1));

// var o = {
//   name:'jing',
//   f1: function() {
//     console.log(this.name);
//     var f2 = function () {
//       console.log(this.name);
//     }();
//   }
// }

// o.f1()
// jing
// undefined

var o = {
  name:'jing',
  f1: function() {
    console.log(this.name);
    var that = this;
    var f2 = function() {
      console.log(that.name);
    }();
  }
}

o.f1()
//jing
//jing
