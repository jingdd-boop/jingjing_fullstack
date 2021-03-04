//方法1
// var a = 123456789;
// var b = 765283982.4567;

// console.log(a.toLocaleString());
// console.log(b.toLocaleString());
//不同地区数字格式可能会有一定的差异

//方法2
function numFormat(num) {
  var res = num.toString().replace(/\d+/,function(n) {
    return n.replace(/(\d)(?=(\d{3})+$)/g,function($1) {
      return $1 + ",";
    })
  })
  return res
}
var a = 123456789;
var b = 765283982.4567;

console.log(numFormat(a));
console.log(numFormat(b))
//匹配整数 /\d+/
//匹配整数 且至少三个数 /(\d)(?=(\d{3})+$)/g