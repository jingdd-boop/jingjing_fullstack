var fib = function(n) {
  if(n = 0) return 0;
  if(n = 1) return 1;

  // 0   1   1  2
  //n-2 n-1  n      第一次

  //    n-2 n-1 n   第二次

  let p = 1,q = 0,r = 0;
  for (let i = 2;i<=n;i++) {
    p = q; //将F(n-1)的值给F(n-2) 
    q = r; //将F(n)的值给F(n-1)
    //一直往后走
    r = p + q;
    //F(n) = F(n-1) + F(n-2);
  }
  return r;
}