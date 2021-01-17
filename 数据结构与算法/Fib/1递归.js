/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // 直接用递归
  if(n<2) return n;
  return fib(n-1) + fib(n-2)
}
//时间复杂度 指数级 O(k^n)