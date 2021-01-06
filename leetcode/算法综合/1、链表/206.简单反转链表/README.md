# 算法综合--链表
## 1.反转链表系列
**例题：**
1.1 原地单链表的反转
反转一个单链表。

示例:
```javascript
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```


1.1.1 方法一 循环迭代

注意的：保存后续节点

- 边界条件 
```javascript
if(!head) return null;
```
- 首先设置一个空节点
```javascript
let pre = null;
let cur = head;
```

- 思路是将后一个节点的指针指向前一个节点

```javascript
let next = cur.next;
cur.next = pre;
pre = cur;
cur = next;
```

- 返回值

```js
return pre
```


1.1.2 递归

- 边界条件
```js
if(!cur) return pre;
```
- 具体代码
```js
let reverseList = (head) => {
  let reverse = (pre,cur) => {
    if(!cur) return pre;

    let next = cur.next//保存next
    cur.next = pre;
    return reverse(cur,next) 
  }
  return reverse(null,head)
}
```

1.2 两个一组反转链表
1.3 K个一组反转链表