/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;//用来存储相加后的链表
  let carry = 0;
  //作为相加后的十位数，留到下一对节点相加的时候把它加上
  while (p1 || p2){//两个链表可能长短不一致
      const v1 = p1 ? p1.val : 0;
      const v2 = p2 ? p2.val : 0;
      //在p1,p2有值的情况下进行操作
      const val = v1 + v2 + carry;
      carry = Math.floor(val / 10);
      //取十位数上的

      //把相加完的节点值（取个位数）添加到p3上
      p3.next = new ListNode(val % 10)

      //三个链表都往后遍历
      if (p1) p1 = p1.next;
      if (p2) p2 = p2.next;
      p3 = p3.next
  }

  //可能会存在多余的carry没有加上去
  if (carry) {
      p3.next = new ListNode(carry);
  }
  return l3.next;
};

//模拟相加操作
//需要遍历链表
//1、新建一个空链表
//2、遍历被相加的两个链表，模拟相加操作，将个位数追加到新莲表示，将十位数留到下一位去相加
//3、