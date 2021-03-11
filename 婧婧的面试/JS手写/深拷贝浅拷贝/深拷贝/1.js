var obj = {
  a: {
    a: "hell",
    b: 3,
  },
};

const newObj = JSON.parse(JSON.stringify(obj));
newObj.a.a = "jing";
console.log(obj.a.a);
//它只适用于一般数据的拷贝（对象、数组）
//1.如果json里面有时间对象，则序列化结果：时间对象=>字符串的形式；
//2、如果json里有RegExp、Error对象，则序列化的结果将只得到空对象 RegExp、Error => {}；
//3、如果json里有 function,undefined，则序列化的结果会把 function,undefined 丢失；
//6.如果对象中存在循环引用的情况也无法实现深拷贝
