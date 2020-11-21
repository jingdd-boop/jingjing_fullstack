2020/11/20 数组方法

# twoSum leetcode
- 1.node.exe 
- 2.node 全局可访问
- node 让js运行在服务器端的语言
  开发速度 更快，没有java这么稳定 

  server Linux
  node 1.js pwd 当前在哪，用命令行操作

- 读题
  nums,target 两个参数
  返回下标
  给定一个整数数组 nums = [2,7,11,15], target = 9
  

- 前期LeetCode刷题，先暴力，再调优 `easy`
1、时间复杂度
O(n*n)
2、空间复杂度

- 提供一个算法
 O(n*n) -> O(n)
 一种适合的数据结构
 Array 也是最基本的数据结构，是一个数据集合，空间是连续的
 JSON Object对象字面量，也是一个数据集合，在c里没有原生的，Hashmap
 O(n*n) -> O(n)+空间多花销

## 箭头函数


**队列方法**

## push
## pop
## shift
## unshift


**遍历方法**
## forEach()
forEach()方法对数组的每个元素执行一次给定的函数
```javascript
const array1 = ['a','b','c'];
array1.forEach(element => console.log(element));
//返回 
// a
// b
// c
```
可依次向 callback 函数传入三个参数：

1、数组当前项的值
2、数组当前项的索引
3、数组对象本身
```javascript
//找出整数数组中大于70的项，并返回
const numbers =[3,63,234,7,23,74,23,76,92]
const arr = [];
const largeNumbers =  numbers.forEach((e,i) => {
  if(e > 70) {
    arr.push(e);
  }
})

console.log(largeNumbers);
```


## filter()
>filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
```javascript
const numbers =[3,63,234,7,23,74,23,76,92]

//filter内置函数，在foreach的基础上，多了一个回调函数,设置这个函数
//这个函数传递一个参数，返回的是这个参数的设定条件。number > 70


const cb = number => number > 70;
// const cd = numbers => {
//   return largeNumbers > 70;
// }s
const largeNumbers = numbers.filter(cb);
console.log(largeNumbers);
```
## map() 数组方法
>定义在`Javascript`的`Array`中，它返回一个新的数组，数组中的元素调用函数处理后的值。 

```javascript
let array = [1,2,3,4,5];
let newArray = array.map((item) => {
  return item*item;
})
console.log(newArray);
//[1,4,9,16,25]
```



## Map 对象
javascript标准内置对象
Map对象保存键值对，并且能够记住键的原始插入顺序
> 一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的数组。

Map()构建Map对象