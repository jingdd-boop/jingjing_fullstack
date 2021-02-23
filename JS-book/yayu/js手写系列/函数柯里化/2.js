var person = [{name:'jing'},{name:'wang'}];
//如果我们要获取name的值，我们可以这样做

var name = person.map(function(item) {
  return item.name;
})

//如果使用curry函数
var prop = curry(function(key,obj) {
  return obj[key]
});

var name = person.map(prop('name'));