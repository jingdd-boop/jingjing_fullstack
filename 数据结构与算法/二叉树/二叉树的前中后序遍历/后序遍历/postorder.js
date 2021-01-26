const bt = require('../bt');

// const postorder = (root) => {
//   if(!root) { return }
//   postorder(root.left)
//   postorder(root.right);
//   console.log(root.val);
// }

const postorder = (root) => {
  if(!root) {return}
  const stack = [root];
  const  outputStack = [];

  while(stack.length){
    const n = stack.pop();
    //pop() 方法将删除 stack 最后一个元素，
    //把数组长度减 1，并且返回它删除的元素的值。
    outputStack.push(n);
    if(n.left) stack.push(n.left);
    if(n.right) stack.push(n.right);
  }
    while(outputStack.length) {
      const n =  outputStack.pop();
      console.log(n.val);
    }
  }

postorder(bt)