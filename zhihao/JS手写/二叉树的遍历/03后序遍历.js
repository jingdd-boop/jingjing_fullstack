var post = function(root) {
  let res = [];
  let stack = [];
  if(root) stack.push(root);

  while(stack.length > 0) {
    let node = stack.pop();
    res.unshift(node.val);
    if(node.left) stack.push(node.left);
    if(node.right) stack.push(node.right);
  }
  return res;
}