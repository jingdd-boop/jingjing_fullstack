class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

//最新的创建对象的方法
Object.assign(Point.prototype, {
  toString() {},
  toValue() {}
})

const o = new Point(1,2);
// console.log(Object.getOwnPropertyNames(o))

console.log(Object.getOwnPropertyNames(Point.prototype));
console.log(Object.keys(Point.prototype));


console.log([...Object.getOwnPropertyNames(o),...Object.keys(o.__proto__),...Object.keys(o.__proto__.__proto__)])

const getAllProperties = (o) => {
  let arr = Object.getOwnPropertyNames(o);
  // 拿到o自己身上的
  let p = o.__proto__;
  let res = [...arr];
  while(p) {
    const keys = Object.keys(p);
    for (let key of keys) {
      // 循环一个数组 for of
      res.push(key);
    }
    console.log(p);//{}
    p = p.__proto__;
    console.log(p) //null
  }
  console.log(res);//[ 'x', 'y', 'toString', 'toValue' ]
  return res;
}


console.log(getAllProperties(o))//[ 'x', 'y', 'toString', 'toValue' ]