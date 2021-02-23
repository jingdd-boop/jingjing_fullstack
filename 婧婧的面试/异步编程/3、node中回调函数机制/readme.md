- 回调函数的方式内部利用了发布-订阅模式

## 模拟实现
node中event模块来写实现回调函数的机制

```js
function EventEmitter() {
  this.events = new Map();
}
```
这个 EventEmitter 一共需要实现这些方法:
- addListener,
- removeListener,
- once, 
- removeAllListener, 
- emit。
