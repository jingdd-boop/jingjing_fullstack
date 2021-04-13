function closure() {
  const name = 'jing';
  return () => {
    return name.split('').reverse().join('')
  }
}

const revereName = closure();
revereName();//当没有执行这里的时候，就是内存泄露了