

var maxDepth = function (root) {
  let res = 0;

  //深度优先
  //l 表示层
  const dfs = (n,l) => {

    if(!n) {return;}
    if(!n.left && !n.right) {
      res = Math.max(res,l);
    }
    
    console.log(n,l);
    dfs(n.left,l+1);
    dfs(n.right,l+1);
  };
  dfs(root,1);
  return res
}