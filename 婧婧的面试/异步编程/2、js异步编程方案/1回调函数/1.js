fs.readFile('xxx', (err, data) => {

});

fs.readFile('1.json', (err, data) => {
  fs.readFile('2.json', (err, data) => {
      fs.readFile('3.json', (err, data) => {
          fs.readFile('4.json', (err, data) => {

          });
      });
  });
});

//回调当中回调，回调地狱
//1.可读性可维护性是非常差的
//2、每次任务可能会失败，需要对每个任务的失败情况进行处理，增加了代码的混乱程度

