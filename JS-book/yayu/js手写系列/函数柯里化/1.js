function add(a,b) {
  return a + b;
}

add(1,2);

//假设有一个curry函数可以做到柯里化

var addCurry = curry(add);
addCurry(1)(2)


//示意一段代码
function ajax(type,url,data) {
  var xhr = new XMLHttpRequest();
  xhr.open(type,url,true);
  xhr.send(data)
}

ajax('POST','www.test.com',"name=jing");
ajax('POST','www.test2.com',"name=jing");
ajax('POST','www.test3.com',"name=jing");

//利用curry
var post =  ajaxCurrry('POST');
//以POST类型请求数据
post('www.test.com',"name=jing");

//以POST 类型请求来自于'www.test.com'的数据
var postFromTest = post('www.test.com');
postFromTest("name=jing")
