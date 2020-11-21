//console.log('towsum leetcode');
//手写代码
/**
 * @author jd
 * @date 2020-11-20
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */

const twoSum = (nums,target) => {
  //console.log('两数相加')
  let res = [];
  //编写功能 一个函数完成 一个功能
  //遍历数组每一项，执行一个callback函数
  //forEach内置函数，会返回一个key value值对
  //遍历函数，一个参数，打印数组的每一项
  //nums.forEach((e,i) => {
    //console.log(e,i); 【
//     2 0
// 7 1
// 11 2
// 15 3
  let map = {}; //JSON Object Hash map 空间复杂度有花销
  //时间复杂度O(2n)
  //哈希map函数
  //let res = [];
  //forEach 能够返回
  //怎么把map中的数据输出
  //放进map中去
  //callback函数，在for循环的同时，把东西放到
  nums.forEach((e,i) => map[e] = i);
  //console.log(map);
  for (let i = 0;i<nums.length;i++) { 
    let j = map[target-nums[i]]; //如果不存在，就是undefined
    if (j && j != i) {
      res =  [i,j];
      break;
    }
  }
  return res;
  
}


console.log(twoSum([2, 7, 11, 15],  9));