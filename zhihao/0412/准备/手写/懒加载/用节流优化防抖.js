function throttle(fn, interval) {
  // last为上一次触发回调的时间
  let last = 0,timer = null
  // 将throttle处理结果当作函数返回
  return function () {
      // 保留调用时的this上下文
      let context = this
      // 保留调用时传入的参数
      let args = arguments
      // 记录本次触发回调的时间
      let now = +new Date()
      
      // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
      if (now - last >= interval) {
        clearTimeout(timer)
        timer = setTimeout(function () {
           last = now
           fn.apply(context, args)
         }, delay)
        } else{
          last = now;
          fn.apply(context, args);
      }
    }
}

