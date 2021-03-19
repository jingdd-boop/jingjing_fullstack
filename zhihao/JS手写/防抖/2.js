function douFun(fn,time) {
  let time = null;
  return function() {
    if(time !== null) clearTimeout(time);
    time = setTimeout(fn,time) 
  }
}

function hander() {
  console.log(Math.random())
}

window.addEventListener('scroll',(douFun(hander,1000)))