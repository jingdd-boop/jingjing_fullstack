function maopao(arr) {
  let len = ar.length;
  if(len <= 0) return arr;
  for (let i = 0;i < len;i++) {
    for (let j = 0;j < len - i - 1;i++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}