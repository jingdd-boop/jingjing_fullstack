//首先 发布订阅是一个 是要写一个类
class myEvent {
  constructor() {
    this.eventMap = {};
  }

  on(type, hander) {
    if (!this.eventMap[type]) {
      this.eventMap[type] = [];
    } else {
      this.eventMap[type].push(hander);
    }
  }

  emit(type, parma) {
    if (this.eventMap[type]) {
      this.eventMap[type].map((hander) => {
        hander(parma);
      });
    }
  }

  off(type, hander) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(hander) >>> 1, 1);
    }
  }
}

const event1 = new myEvent();
console.log(event1);

const hander = function (parma) {
  console.log(`事件被触发，接入的参数是${parma}`);
};

console.log(event1.on("text", hander));
console.log(event1.emit("text", "newstate"));
