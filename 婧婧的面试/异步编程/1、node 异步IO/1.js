let fs = require('fs');
fs.readFile('./test.txt',function(err,data) {
  console.log(data)
})

