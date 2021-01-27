/**
 * @param {TreeNode} root
 * @return {number}
 */

// 解题步骤
// 1、 广度优先遍历整棵树，并记录每个节点的层级
// 2、遇到叶子节点，返回节点层级，停止遍历
var minDepth = function(root) {
  if(!root) {return 0}
  const q = [[root,1]];
  while(q.length) {
    const [n,l] = q.shift();
    if(!n.left && !n.right) {
      return l;
    }
    if (n.left) q.push([n.left,l + 1]);
    if (n.right) q.push([n.right,l + 1]);
  }
};