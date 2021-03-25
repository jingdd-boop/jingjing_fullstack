var params = url.split("?")[1].split("&");
var obj = {};
params.map(item => obj[item.split("=")[0] = item.split("=")[1]])
console.log(obj)