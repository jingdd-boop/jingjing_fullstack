// function jlfunc(fn,time) {
//   let flag = true;
//   return function() {
//     if(!flag) return ;
//     flag = false;
//     setTimeout(() => {
//       fn.apply(this.arguments);
//       flag = true
//     },time)
   
//   }
// }

function throttle(fn,interval) {
  let last = 0;
  return function() {
    let context = this;
    let arg = arguments;
    let now = +new Date();
    if(now - last >= interval) {
      last = now;
      fn.apply(context,arg);
    }
  }
}

const better = throttle(() => {
  console.log('触发了')
})
document.addEventListener('scroll',better);

