readFilePromise('1.json').then(data => {
  return readFilePromise('2.json')
}).then(data => {
  return readFilePromise('3.json')
}).then(data => {
  return readFilePromise('4.json')
});