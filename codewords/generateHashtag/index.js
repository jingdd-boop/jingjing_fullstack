//console.log("hello world".split("")[0].toUpperCase().charAt(0));

//"hello world".slice(1)

// split('')按空格切割函数，之后是一个数组，toUpperCase()字符大写 charAt()拿到第0个字符

function generateHashtag(str) {
  // // 'hello world' 'Hello world'
  // let arr = [];
  // str
  // .split(' ')
  // .forEach(item => {
  //   //console.log(item);
  //   arr.push(item.charAt(0).toUpperCase() + item.slice(1));
  // });
  // //console.log(arr);
  // return arr.join(' ')
//.join(' ')会从一个数组变回字符串
 return str.length > 140 || str === '' ? fasle: '#' + str.split(' ').map(capitalize).join(' ');
}
//map的callback
function capitalize(item) {
  return item.charAt(0).toUpperCase() + item.slice(1);
}
console.log(generateHashtag('hello world'));