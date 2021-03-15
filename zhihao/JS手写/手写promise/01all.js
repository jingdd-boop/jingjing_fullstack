Promise.myall = function(promisearr) {
  return new Promise((resolve,reject) => {
    let ans = [];
    let index = 0;
    for (let i = 0;i < promisearr.length;i++) {
      promisearr[i]
      .then(res => {
        ans[i] = res;
        index++;
        if(index = promisearr.length) {
          resolve(ans);
        }
      })
      .catch(err => reject(err));
    }
  })
}