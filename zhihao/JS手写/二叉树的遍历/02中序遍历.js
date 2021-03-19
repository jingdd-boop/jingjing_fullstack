var center = function(root) {
  let res = [];
  let stack = [];
 

  if(root) {
    stack.push(root);
    root = root.left;
  }

  while(stack.length > 0) {
    let node = stack.pop();
    res.push(node.val)
    node = node.right;
    while(node) {
      stack.push(node);
      node = node.left;
    }
  }
  return res;
}