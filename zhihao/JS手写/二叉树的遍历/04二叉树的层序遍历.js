var cxFun = function(root) {
  let res = [];
  let q = [];
  if(root) q.push(root);
  while(q.length > 0) {
    let arr = [];
    let len = q.length;
    while(len--) {
      let node = q.shift();
      arr.push(node.val);
      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
    }
    res.push(arr);
  }
  return res;
}