function ListNode(val) {
  this.val = val;//值
  this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(6);
const n4 = new ListNode(3);
const n5 = new ListNode(4);
const n6 = new ListNode(6);
const n7 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6
n6.next = n7;
//console.log(n1);

function removeElements (head,val) {
  //head:头结点,val:要检查的值
  //如果当前节点的下一个节点为val,则把当前节点的next,指向下一个节点的next（next.next）

  //特例：如果头结点的值为val 
  const dummy = {
    //哨兵节点,假节点，不会影响链表

    next:head //哨兵节点为头节点，可能为val的节点服务，保存链表
  }
  let current = dummy;//当前节点先指向我们的哨兵节点
  while(current && current.next) {
    //链表中有尾节点，少判断一次，下一个节点为null
    //遍历
    let next = current.next;//取到当前节点的下一个节点
    if(next.val === val) {
      current.next = next.next;//当current.val值为val,下一个节点从链表中移除
    }
    if(next.val !== val) {
      current = next;
    }
  }
  return dummy.next;//返回dummy指向下一个next，移除dummy
}

console.log(removeElements(n1,6));