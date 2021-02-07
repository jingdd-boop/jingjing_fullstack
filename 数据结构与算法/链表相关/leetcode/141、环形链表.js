/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let p1 = head;
  let p2 = head;
  //都要满足哈
  while (p1 && p2 && p2.next){
      p1 = p1.next;
      p2 = p2.next.next;//一个走一步，一个走两步
      if(p1 === p2) {
          return true;
      }
  }
  return false;
};
//用快慢指针两个指针遍历链表，如果指针能够相逢，就返回true
//遍历结束没有重逢就返回false