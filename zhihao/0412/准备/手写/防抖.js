function debounce(fn,wait) {
  let tmier = null;
  return function() {
    if(tmier) clearTimeout(timer);
    let arg = arguments;
    let context = this;
    tmier = setTimeout(() => {
      fn.apply(context,arg);
    },wait);
  }
}

const better_scroll = debounce(() => console.log('触发了滚动事件'), 1000)

document.addEventListener('scroll', better_scroll)