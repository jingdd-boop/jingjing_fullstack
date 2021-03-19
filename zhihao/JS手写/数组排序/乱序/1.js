function randArr(arr) {
  for(let i =0;i <arr.length;i++) {
    var random = Math.floor(Math.random()*(i+1))
    [arr[i],arr[random]] = [arr[random],arr[i]]
  }
}

function randArr1(arr) {
  arr.sort(function() {
    return Math.random()-0.5;
  })
  return arr;
}