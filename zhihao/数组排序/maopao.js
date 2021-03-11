// 最简单的一种排序 
// 1、数组的第一个元素开始到数组的最后一个元素为止
// 对数组中相邻的两个元素进行比较
// 2、如果位于数组的左端的元素大于数组右端的元素
// 3、则交换着两个元素在数组的位置
// 4、此时数组最右端的元素就是数组中所有元素的最大值
// 5、接着对该数组剩下的n-1个元素进行冒泡排序，知道整个数组有序排序
// 6、算法的时间复杂度为O(n^2)



const sort = (arr) => {
  for (let i = 0;i < arr.length;i++) {
    for (let j = 0;j < arr.length -  i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp
      }
    }
  }
  return arr;
}

let arr = [1,3,2,5,44,7,11,32,10,9];
console.log(sort(arr))
