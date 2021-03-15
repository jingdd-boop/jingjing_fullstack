function chooseFun(array) {
  const len = array.length;
  let temp;
  let minIdex;
  for (let i = 0;i < len;i++) {
    minIdex = i;
    for (let j = i+1;j <len;j++) {
      if(array[i] <= array[minIdex]) {
        minIdex = j;
      }
    }
    temp = array[i];
    array[j] = array[minIdex];
    array[minIdex] = temp;
  }
  return array;
}