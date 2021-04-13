var arr = [1,3,3,4,2,6,8,4];

console.log([...new Set(arr)]);

//循环加splice
function sort1(arr) {
  let len = arr.length;
  for (let i = 0;i < len;i++) {
    for (let j = i+1;j < len;j++) {
      if(arr[i] = arr[j]) {
       arr.splice(j,1);
       len--;
       j--;
      }
    }
  }
  return arr
}

//indexOf  includes
const sort2 = arr => {
  const res = [];
  for (let i = 0;i < arr.length;i++) {
    if(res.indexOf(arr[i] === -1)) res.push(arr[i]);
  }
  return res;
}

//filter 
const sort3 = arr => {
  return arr.filter((item,index) => {
    return arr.indexOf(item) === index;
  })
}

//map
const sort4 = arr => {
  const map = new Map();
  const res = [];
  for(let i = 0;i < arr.length;i++) {
    if(!map.has(arr[i])) {
      map.set(arr[i],true);
      res.push(arr[i])
    }
  }
  return res;
}