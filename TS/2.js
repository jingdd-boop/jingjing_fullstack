var getUserInfoWidthTs = function (user) { return "name:" + user.name + " age:" + user.age; };
console.log(getUserInfoWidthTs({ name: 'jing', age: 12 }));
//ts 解决了类型强制规定问题
