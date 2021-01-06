
 
  function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

const n1 = new ListNode(1);
const n2 = new ListNode(4);
const n3 = new ListNode(3);
const n4 = new ListNode(2);
const n5 = new ListNode(5);
const n6 = new ListNode(2);


n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6

//console.log(n1)

var partition = function(head, x) {
  if (!head || !head.next) return head
  var arr1 = [];
  var arr2 = [];

  while(head) {
   var next = head.next;
   head.next = null;

   if(head.val <= x) {
       arr1.push(head.val)
       console.log(arr1)
   } else {
       arr2.push(head.val)
   }
   head = head.next
  } 

  for(var i = 0;i < arr1.length - 1;i++) {
       arr1[i].next = arr1[i+1];
  }
 

  for(var i = 0;i < arr2.length - 1;i++) {
       arr2[i].next = arr2[i+1];
  }
  

  arr1[arr1.length-1] = arr2[0];
  return arr1[0];
  

};

