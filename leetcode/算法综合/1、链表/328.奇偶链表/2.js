function ListNode(val) {
  this.val = val;
  this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

//1、原地 没有两个数组可以用了
//2、哨兵节点
var oddEvenList = function(head) {
  if(!head || !head.next) {
    //如果为空链表，或者只有一个节点，返回 head
    return head
  }

  const dummyHead1 = {
    //没有value
    //奇数链表的头结点
    next:head
  }
  const dummyHead2 = {
    //偶数链表
    next:head.next
  }
  let odd = dummyHead1.next;//奇数节点
  let even = dummyHead2.next//偶数节点
  
  while(odd && odd.next && even && even.next) {
    const oddNext = odd.next.next;//下一个奇数节点
    const evenNext = even.next.next;//下一个偶数节点
    
    odd.next = oddNext;
    even.next = evenNext;
    //奇数节点一直指向奇数节点，偶数节点一直指向偶数节点

    odd = oddNext;
    even = evenNext;
    
  }
  //凭借奇偶链表
  odd.next = dummyHead2.next;
  return dummyHead1.next;
}

console.log(oddEvenList(n1))
