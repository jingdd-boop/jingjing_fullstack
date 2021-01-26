const bt = require('../bt');

//递归版本
// const preorder = (root) => {
//   if(!root) { return }
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right)
// };


// 非递归版本
const preorder = (root) => {
  if(!root) {return}
  const stack = [root];
  while(stack.length){
    const n = stack.pop();
    //pop() 方法将删除 stack 最后一个元素，
    //把数组长度减 1，并且返回它删除的元素的值。
    console.log(n.val);
    if(n.right) stack.push(n.right);
    if(n.left) stack.push(n.left);
  }
  }

preorder(bt);