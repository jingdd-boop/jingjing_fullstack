/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {return;}
  const q = [root];
  while(q.lenght) {
    const n = q.shift();
    console.log(n.val);
    if(n.left) q.push(n.left);
    if(n.right) q.push(n.right);
  }
};


// var levelOrder = function(root) {
//   if (!root) {return;}
//   const q = [[root,0]];
//   const res = [];//存取结构
//   while(q.length) {
//       const [n,l] = q.shift();
//       // console.log(n.val,l);
//       //当存取结果的数组res没有东西的时候，也就是为空[],把节点的值push到里面
//       //其他的值就根据层级放
//       if(!res[l]){
//           res.push([n.val]);
//       } else{
//           res[l].push(n.val)
//       }
//       if(n.left) q.push([n.left,l + 1]);
//       if(n.right) q.push([n.right,l + 1]);
//       //如果当前节点存在左右节点，那么遍历这两个节点时的层级要加一，
//       //因为他们在当前节点的下一级
//   }
// return res;
// };