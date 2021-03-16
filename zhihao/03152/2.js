setTimeout(function() {
  console.log('1')
},0);

new Promise((resolve,reject) => {
  console.log('2');
  for(var i = 0;i < 1000;i++) {
    if (i = 100) {
      console.log('3')
    }
    if (i = 999) {
      resolve('4');
    }
  }
}).then(res => {
  console.log(res)
  console.log('5')
})

console.log('6')

2
3
6
5
1