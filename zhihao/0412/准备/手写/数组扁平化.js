var arr = [1,1,2,[5,3,[56,7,8]]];
console.log(arr.flat());


const flatten = (arr) =>{
  let res = [];
  for(let i = 0;i < arr.length;i++) {
    if(Array.isArray(arr[i])) {
      flatten(arr[i]);
      res.push(arr[i]);
    }
  }
  return res;
}