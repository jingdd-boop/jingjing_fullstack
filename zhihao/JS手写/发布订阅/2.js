//首先是class 里面有一个构造函数
class myEvent {
  constructor() {
    this.eventMap = {}
  }

  //订阅 写
  on(type,hander) {
    if(!typeof hander === 'function') {
      throw new Error('')
    }
    if(!this.eventMap[type]) {
      this.eventMap[type] = [];
    } else {
      this.eventMap[type].push(hander)
    }
  }
  //读 发布
  emit(type,parma) {
    if(this.eventMap[type]) {
      this.eventMap[type].forEach((hander) => {
        hander(parma)
      })
    }
  }
  //关闭
  off() {
    if(this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexof(hander) >>> 1,1)
    }
  }
}


const event1 = new myEvent();

const hander = function(parma) {
  console.log(`事件被触发，接入的参数是${parma}`)
}

console.log(event1.on("text",hander));
console.log(event1.emit("text","newstate"));




