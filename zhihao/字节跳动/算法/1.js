var obj = {  
  redaApple:'111',  
  blueSpple:
  {   greenCpple:
    {    
      orangeDpple:'222'   
    }  
  }
}
function hump2Underline(s) {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase()
}

// JSON对象的key值转换为下划线格式
function jsonToUnderline(obj) {
  if (obj instanceof Array) {
    obj.forEach(function(v, i) {
      jsonToUnderline(v)
    })
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(function(key) {
      // console.log(key)
      let newKey = hump2Underline(key)
      console.log(newKey)
      if (newKey !== key) {
        obj[newKey] = obj[key]
        delete obj[key]
      }
      jsonToUnderline(obj[newKey])
    })
    
  }
  
}

console.log(jsonToUnderline(obj))