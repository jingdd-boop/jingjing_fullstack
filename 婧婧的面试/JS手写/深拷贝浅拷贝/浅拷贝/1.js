var a = 25;
var b = a;
b = 18;
console.log(a);

//b的值的改变并不会影响到a的值
//简单数据类型，按值传递

var test = {
  a: "a",
  b: "a",
};

var test2 = test;
test2.a = "a2";
console.log(test.a);

//原来的值也被影响到了
//我们需要考虑的话题

//JS中的复杂类型，是一个引用的传递关系 共享内存地址

//理一下，就是说如果是基本类型进行复制的时候，即便之后改变复制的值，它原先的值不会受到影响
//如果是引用类型的话，如果进行复制操作，因为是对象的引用，如果复制后的对象里面的值发生改变，会导致
//原先对象的值也发生改变
