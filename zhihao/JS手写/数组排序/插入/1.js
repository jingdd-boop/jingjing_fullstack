const charuSort = (arr) => {
  let i,j
  for (i = 1;i < arr.length;i++) {
    if (arr[i] < arr[i-1]) {
      let temp = arr[i]
      for (j = i-1;j >= 0 && temp < arr[j];j--) {
        arr[j+1] = arr[j]
      }
      arr[j+1] = temp
    }
  }
  return arr
}
console.log(charuSort([1,3,2,7,4]))

// var maxUncrossedLines = function(A, B) {
//   let arr = [];
//   for (let i = 0;i<A.length;i++) {
//     for (let j = 0;j<B.length;j++) {
//       if(A[i] === B[j]) {
//         console.log(i,j)
//         arr.push([i,j])
//         console.log(arr)

        
//       }
    
     
//     }
//   }
// };

// console.log(maxUncrossedLines([1,2,4],[1,4,2]))