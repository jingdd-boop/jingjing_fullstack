function quickFun(array) {
  var quick = function(arr) {
    if(arr.length <= 1) return arr;
    const len = arr.length;
    const index = Math.floor(len / 2);
    const p = arr.splice(index,1)[0];
    const left = [];
    const right = [];
    for (let i = 0;i < len;i++) {
      if(arr[i] < p) {
        left.push(arr[i])
      } else if(arr[i] > p) {
        right.push(arr[i])
      }
    }
    return quick(left).concat([p],quick(right))
  }
  const res = quick(array);
  return res;
}

var array = [1,5,2,4,38,7,0];
console.log(quickFun(array));