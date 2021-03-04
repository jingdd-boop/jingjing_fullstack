var obj = {  
  red_apple:'111',  
  blue_apple:
  {   green_apple:
    {    
      orange_apple:'222'   
    }  
  }
}
// 下划线形式的key转换成小驼峰 
// 字符串的下划线格式转驼峰格式，eg：hello_world => helloWorld
function underline2Hump(s) {
  return s.replace(/_(\w)/g, function(all, letter) {
    //	匹配字母、数字、下划线。
    return letter.toUpperCase()
  })
}
//匹配下划线   /_(\w)/g



// JSON对象的key值转换为驼峰式
function jsonToHump(obj) {
  if (obj instanceof Array) {
    obj.forEach(function(v, i) {
      jsonToHump(v)
    })
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(function(key) {
      var newKey = underline2Hump(key)
      if (newKey !== key) {
        obj[newKey] = obj[key]
        delete obj[key]
      }
      jsonToHump(obj[newKey])
    })
  }
}

console.log(jsonToHump(obj))

