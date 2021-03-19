function myAll(promiseArr) {
  return new Promise((resolve,reject) => {
    let ans = [];
    let index = 0;
    for(let i = 0;i < promiseArr.length;i++) {
      promiseArr[i].then(res => {
        ans[i] = res;
        index++;
      if(index === promiseArr.length) {
        resolve(res);
      }
      }) .catch(err => reject(err))
    }
  })
}