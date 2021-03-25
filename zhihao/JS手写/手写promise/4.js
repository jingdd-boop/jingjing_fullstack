function myAll(promiseArr) {
  return new Promise((resolve,reject) => {
    let index= 0;
    let ans = [];
    for (let i = 0; i < promiseArr.length;i++) {
      Promise.resolve(promiseArr[i])
      .then(res => {
        ans[i] = res;
        index++;
        if(index === promiseArr.length) {
          resolve(res)
        }
      }).catch(err => reject(err))
    }
  })
}