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

var oddEvenList = function(head) {
  //方法一：（空间复杂度不是O（1），---为O（n））
  //通过链表的一次遍历将奇偶节点分开放在两个不同的数组
  //奇链表的伪节点指向偶链表的头节点
  if(!head || !head.next) {
    //如果为空链表，或者只有一个节点，返回 head
    return head
  }
  var odd = [];//奇数节点放在这
  var even = [];//偶数节点放在这 

  var f = true;//奇偶标记变量
  while(head) {
    //一次遍历链表
    var next = head.next;
    head.next = null;//将原来的链关系打掉
    

    if (f) {
      //第一次刚进来，或者true
      odd.push(head) //奇数节点数组，每个节点的next，都没有了
    } else {
      even.push(head);
    }
    f = !f; //一奇一偶
    head = next;
  }
  //重建两个分链表的顺序 不是原点算法

  for(var i = 0;i < odd.length - 1;i++) 
    odd[i].next = odd[i+1];
  
  for(var i = 0;i < even.length - 1;i++) 
    even[i].next = even[i+1];
  
  //将奇链表的尾节点指向偶链表的尾节点
  odd[odd.length-1] = even[0];
  return odd[0];


  //  a->b->c
  //  a->b
  // head -> next
  // head.next = null
  // a  b
  // 重复上面的步骤 b->c  
  //将原来的链关系打断

}

console.log(oddEvenList(n1));
