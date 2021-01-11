/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let arr = [];
  var diff = function(node) {
    if (node === null) {
      return 
    }
    //中序遍历，先访问左子树，接着访问节点，最后访问右指数
    //在访问节点的时候，把这个节点push到数组中去
    diff(node.left);
    arr.push(node.val);
    diff(node.right);
  }
  diff(root);
  //中序遍历这棵树

  //遍历这个存放了节点的数组
  if (array.length > 0) {
    let newRoot = new TreeNode(array[0]) 
    //创建一个新的数的节点 （为数组的第一个节点）
    let rightRoot = newRoot;
    for (let i = 0;i<array.length;i++) {
      newRoot.right = new TreeNode(array[i]);
      newRoot = newRoot,right;
    }
    return rightRoot;
  } else {
    return [];
  }
}