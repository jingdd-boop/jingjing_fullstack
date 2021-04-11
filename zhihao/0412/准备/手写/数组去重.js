var arr = [1,3,3,4,2,6,8,4];

console.log([...new Sort(arr)]);

function sort1(arr) {
  let len = arr.length;
  let res = [];
  for (let i = 0;i < len;i++) {
    for (let j = i+1;j < len;j++) {
      if(arr[i] = arr[j]) {
       arr.slice(j,1);
      }
    }
  }
}

function sort2(arr) {
  arr.reduce((pre,cur,item) => {
    return arr.index(cur) =  item;
  })
  return arr;
}

function sort3(arr) {
  arr.filter(() => {
    
  })
}