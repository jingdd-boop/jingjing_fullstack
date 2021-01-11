/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  var left,right;//定义两个指针
  var temp = "->"; //一个区间的连接符
  var arr = []; //存取这个区间

  //左右两个指针初始指向都是数组的第一个数
  left = nums[0];
  right = nums[0];

  //判断只有一个数字的情况
  if(nums.length === 1) {
    arr.push(nums[0]+"")
    return arr;
  }

  //其他情况
  for (let i = 0;i <= nums.length;i++) {
    if(nums[i] - nums[i-1] === 1) {
      right = nums[i];
      //当前一个值和后一个值是连续的，将右指针往前移
    } else if(left === right) {
      //当左右指针重合
      arr.push(left+"")
      left = nums[i];
      right=nums[i];
    } else {
      arr.push(left+temp+right)
      left=nums[i];
      right=nums[i];
    } 
  }

return arr;
}

// let arr = [1,2,4,5,6,8,9]
// console.log(summaryRanges(arr))
