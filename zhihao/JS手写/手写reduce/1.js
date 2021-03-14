// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
// reduce() 可以作为一个高阶函数，用于函数的 compose。
// 注意: reduce() 对于空数组是不会执行回调函数的。
Array.prototype.reduce1 = function (callback, initialValue) {
  if (this == undefined) {
    throw new TypeError("this is null or not undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError("this is not a function");
  }
  const O = Object(this);
  const len = O.length >>> 0;

  let accumulator = initialValue;
  let i = 0;

  //分情况
  // 如果第二个参数为undefined的情况下
  // 则数组的第一个有效值作为累加器的初始
  if (accumulator === undefined) {
    while (i < len && !(i in O)) {
      i++;
    }

    if (i >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = O[k++];
  }

  // 如果第二个参数不为undefined的情况
  while (i < len) {
    if (i in O) {
      accumulator = callback.call(undefined, accumulator, O[k], k, O);
    }
    i++;
  }
  return accumulator;
};
