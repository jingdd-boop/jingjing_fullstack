let promise = new Promise((resolve,reject) => {
  console.log('jing');
  a = 9;
  let a;
})

promise.then(function(res) {
  console.log('fulfilled',res)
}, (err)=> {
  console.log('rejected',err);
})

console.log('end')