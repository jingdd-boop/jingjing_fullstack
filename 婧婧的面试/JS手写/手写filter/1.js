//filter() 数组的一个方法 方法创建一个新的数组，
//新数组中的元素是通过检查指定数组中符合条件的所有元素。

Array.prototype.filter1 = function(callback,thisArg) {
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
      if(callback.call(thisArg,O[i],i,O)) {
        //array.filter(function(currentValue,index,arr), thisValue)
        //回调函数带的参数 O[i],i,O
        res.push(O[i]);
      }
    }
  }
  return res
} 
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

console.log(ages.filter1(checkAdult))