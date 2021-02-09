/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = new Map();
  nums1.forEach(n => {
      map.set(n,true);
      //去重
  });
  const res = [];
  nums2.forEach(n => {
      if(map.get(n)) {
          //如果nums2中的元素在map中出现过，把这个元素push到res中
          res.push(n);
          map.delete(n);//防止重复
          
      }
  })
  return res;
};