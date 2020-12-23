/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = (head) => {
  let reverse = (pre,cur) => {
    if(!cur) return pre;

    let next = cur.next//保存next
    cur.next = pre;
    return reverse(cur,next) 
  }
  return reverse(null,head)
}