// forEach跟map类似，唯一不同的是forEach是没有返回值的。

Array.prototype.foreach1 = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError("this is null");
  }
  if (typeof callback !== "function") {
    throw new TypeError("this is not function");
  }

  const O = Object(this);
  const len = O.length >>> 0;

  for (let i = 0; i < len; i++) {
    callback.call(thisArg, O[i], i, O);
  }
};

var arr = [1, 2, 3, 4, 5];

arr.foreach1(function (item) {
  // console.log(item,index)
  item = item + 2;
  console.log(item);
});
