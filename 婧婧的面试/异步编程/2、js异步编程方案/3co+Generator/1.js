co(function* () {
  const r1 = yield readFilePromise('1.json');
  const r2 = yield readFilePromise('2.json');
  const r3 = yield readFilePromise('3.json');
  const r4 = yield readFilePromise('4.json');
})

//利用协程完成 Generator 函数，
//用 co 库让代码依次执行完，
//同时以同步的方式书写，也让异步操作按顺序执行。