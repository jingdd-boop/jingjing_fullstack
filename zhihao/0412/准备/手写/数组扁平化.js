var arr = [1,1,2,[5,3,[56,7,8]]];

//flat
console.log(arr.flat());

//函数递归
const flatten = (arr) =>{
  let res = [];
  for(let i = 0;i < arr.length;i++) {
    if(Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(flatten(arr))

//reduce
const flatten1 = arr => {
  return arr.reduce((pre,cur) => {
    return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur);
  },[])
}

console.log(flatten1(arr));

