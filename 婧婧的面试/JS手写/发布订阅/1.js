class myEventEmitter{
//on(): 赋值注册监听事件的监听器，指定事件触发的回调函数
//emit(): 负责触发事件，可以通过传参使其在触发的时候携带数据
//off():负责监听器的删除
//1、处理事件和监听函数的对应关系
//提到“对应关系”，应该联想到的是“映射”。
//在 JavaScript 中，处理“映射”我们大部分情况下都是用对象来做的。
//所以说在全局我们需要设置一个对象，来存储事件和监听函数之间的关系：
constructor() {
  //eventMap 用来存储事件和监听函数之间的关系
  this.eventMap = {}
}
//2、如何实现订阅
//所谓“订阅”，也就是注册事件监听函数的过程。
//这是一个“写”操作，具体来说就是把事件和对应的监听函数写入到 eventMap 里面去：
on(type,hander) {
  if(!typeof hander === 'function') {
    throw new Error('错了')
  }
  if(!this.eventMap[type]) {
    this.eventMap[type] = []
  } else {
    this.eventMap[type].push(hander)
  }
}
//3、如何实现发布
//发布的本质是触发安装在某个事件上的监听函数，
//我们需要做的就是找到这个事件对应的监听函数队列，将队列中的 handler 依次执行出队：

emit(type,params) {
  if(this.eventMap[type]) {
    this.eventMap[type].forEach((hander,index) => {
      hander(params)
    });
  }
} 

off(type,hander) {
  if(this.eventMap[type]) {
    this.eventMap[type].splice(this.eventMap[type].indexOf(hander)>>>0,1)
  }
}
}


/// 实例化 myEventEmitter
const myEvent = new myEventEmitter();
// 编写一个简单的 handler
const testHandler = function (params) {
  console.log(`test事件被触发了，testHandler 接收到的入参是${params}`);
};
// 监听 test 事件
myEvent.on("test", testHandler);
// 在触发 test 事件的同时，传入希望 testHandler 感知的参数
myEvent.emit("test", "newState");