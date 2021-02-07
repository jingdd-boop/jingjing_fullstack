/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//排序链表，重复节点相邻哈
var deleteDuplicates = function(head) {
  let p = head;
  while(p && p.next) {
      if(p.val === p.next.val) {
          p.next = p.next.next
          //删除节点操作
      } else {
           p = p.next //往后遍历
      }
     
  }
  return head

};

//因为链表是有序的，所以重复元素一定相邻
//遍历这个链表，如果发现当前元素和下个元素值相等，就删除下个元素值