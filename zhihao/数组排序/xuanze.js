const xuanze =  (arr) => {
  for (let i = 0;i < arr.length;i++) {
    for (let j = i + 1;j<arr.length;j++) {
      if (arr[i] > arr[j]) {
        let  temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp
      }
    }
  }
  return arr
}

var arr = [1,15,7,23,9,3]
console.log(xuanze(arr))