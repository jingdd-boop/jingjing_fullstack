/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  //将被删节点的值改为下个节点的值
  node.val = node.next.val
  //删除下个节点
  node.next = node.next.next
};
//head = [4,5,1,9],node = 5
//将被删节点的值改为下个节点的值 ->  head = [4,1,1,9] 
//删除下个节点 -> head = [4,1,9]