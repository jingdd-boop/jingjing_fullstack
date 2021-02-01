//简单数据类型是按值传递
var a =25;
var b = a;
b = 18;
console.log(a);

//js复杂数据类型，是一个引用传递的关系，共享内存地址
var test = {
  a:'a',
  b:'a'
}
var test2 = test;
test2.a="a2";
console.log(test.a);