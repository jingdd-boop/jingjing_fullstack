// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// map() 方法按照原始数组元素顺序依次处理元素。
// 注意： map() 不会对空数组进行检测。
// 注意： map() 不会改变原始数组。


Array.prototype.map1 = function(callback,thisArg) {
  if(this == undefined) {
    throw new TypeError('this is null or not undefined')
  }
  if(typeof callback !== 'function') {
    throw new TypeError('this is not a function')
  }
  const res = []//返回的新数组
   // 让O成为回调函数的对象传递（强制转换对象）
  const O = Object(this);
  //>>>0 保证len为number，且为正整数
  const len = O.length >>> 0;
  for (let i = 0;i<len;i++) {
    if(i in O) {
      res[i] = callback.call(thisArg,O[i],i,O)
    }
  }
  return res
} 

var numbers = [4, 9, 16, 25];
console.log(numbers.map1(Math.sqrt));