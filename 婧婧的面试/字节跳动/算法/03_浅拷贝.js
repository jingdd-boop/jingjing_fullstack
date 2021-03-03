const shallClone = (target) => {
  if(typeof target === 'object' && target !== null) {
    const newTarget = Array.isArray(target) ? [] : {}
    for(let keys in target) {
      if(target.hasOwnProperty(keys)) {
        newTarget[keys] = target[keys]
      }
      return newTarget
    } 
  } else {
    return target;
  }
}

/**
 * 1、测试传入的traget为object类型，因为深浅拷贝是基于对象或者数组
 * 2、根据传入的target来设置拷贝后的类型[],{}
 * 3、Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
 * 4、赋值 返回
 * 5、如果target是一个普通类型，那么直接返回就可以
 */


var arr = {
  a:'a',
  b:'b'
}
newarr = shallClone(arr)
newarr.a = 'c';
console.log(newarr.a)
console.log(arr.a);

//就是说拷贝的对象或者数组里面的值发生了变化，但是原对象或数组当中的值不变