var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function insertSort(array) {
  const len = array.length;
  let current;
  let pre;
  for(let i = 1;i < len;i++) {
    current = array[i];
    pre = i - 1;
    while (pre >= 0 && array[pre] > current) {
      array[pre + 1] =array[pre];
      pre--
    }
    array[pre + 1] = current;
  }
  return array;
}

console.log(insertSort(a))
