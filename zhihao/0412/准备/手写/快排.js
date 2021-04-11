function quickSort(array) {
  if(array.length <= 0) return [];
  const quick = (arr) => {
    let len = arr.length;
    let index = Math.floor(len / 2);
    let p = arr.splice(index,1)[0];
    let left = [];
    let right = [];

    for(let i = 0;i < len;i++) {
      if(p > arr[i]) {
        left.push(arr[i]);
      } else if(p < arr[i]) {
        right.push(arr[i]);
      }
    }
    return quick(left).concat([p],quick(right));
  }
  let res = quick(arr);
  return res;
}

var arr = [1,6,3,5,2];
console.log(quickSort(arr));