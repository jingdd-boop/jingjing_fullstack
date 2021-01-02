/**
 * 
 * @param {Array} flowerbed 
 * @param {Number} n 
 * @return {Boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let m = flowerbed;
  for (let i = 0;i < m;i++) {
    if(flowerbed[i] !== 1 && flowerbed[i-1] !== 1 && flowerbed[i+1] !==1) {
      n--;
      i++;
    }
  };
  return n >= 0; 
}

arr = [1,0,0,0,0,0,0,1]
console.log(canPlaceFlowers(arr,3));