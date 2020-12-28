var swapPairs = function(head) {
  if(head == null || head.next == null) {
    return head;
  }
  let  dummyHead = p = new ListNode();
  let node1,node2;
  dummyHead.next = head;
  while((node1 = p.next) && (node2 = p.next.next)) {
    node1.next = node2.next;
    node2.next = node1;
    p.next = node2;
    p = node1;
  }
  return dummyHead.next;
};