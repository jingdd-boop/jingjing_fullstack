var preFun = function(root) {
  // let stack = [];
  // let res = [];
  // if(root) stack.push(root);
  // while(stack.length > 0) {
  //   const node = stack.pop();
  //   res.push(node.val);
  //   if(node.right) stack.push(node.right);
  //   if(node.left) stack.push(node.left);
  // }
  // return res;

  let res = [];
  if(!root) return [];
  const dfs = (root) => {
    if(root) {
      res.push(root.val);
      dfs(root.left);
      dfs(root.right);
    }
  }
  dfs(root)
  return res;
}