var arr = [1,3,2,3,3,3,5,6,7];
// newArr = [...new Set(arr)]
// console.log(newArr)


console.log(
  arr.reduce((arr,cur) => {
    if(!arr.includes(cur)) {
      arr.push(cur)
    }
    return arr;
  },[])
)

// 1、for循环
// 2、set
// 3、reduce