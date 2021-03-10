//高频事件触发，但n秒内只会执行一次，节流会稀释函数的执行频率

const throttle = (fn,time) => {
  let flag = true;
  return function() {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this,arguments);
      flag = true;
    },time);
    //设置一个定时器，当时间内flag就为false，当时间超过了flag为true
  }
}