/**
 * 
 * @param {} s 
 * @return {Array} 
 */
//定义一个数组用来存放最终的结果
//定义一个标记量 num 表示字符连续出现的次数
//遍历整个字符，当遍历到最后一个字符时，或者当下一个字符不等于这个字符时，继续往下遍历
//否则就说明num++
//当num>=3时，将起始位置到最终的位置作为值，push到ret中

// for (let i = 0; i < n; i++) {
//   if (i === n - 1 || s[i] !== s[i + 1]) {
//       当存在遍历到字符末尾或者 前一个字符不等于后一个字符
//       if (num >= 3) {
//         ret.push([i - num + 1, i]);
//     }
//     num = 1;
//   } else {
//     num++;
//   }
// }

var largeGroupPositions = function(s) {
  const jing = [];//存结果

  let t = 1;//标记重复字符个数
  for (let i = 0;i < s.length;i++) {
    if(i === s.length-1 || s[i] !== s[i+1]) {
      if(t >= 3) {
        jing.push([i - t + 1,i]);
      }
      t = 1;//遍历过程中没出现重复t = 1
    } else {
      num++;
    }
  }
  return jing;
  
}