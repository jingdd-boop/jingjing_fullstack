// 字符串的驼峰格式转下划线格式，eg：helloWorld => hello_world
function hump2Underline(s) {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase()
}

//匹配大写字母 /[A-Z]/g,'_$1'

// JSON对象的key值转换为下划线格式
function jsonToUnderline(obj) {
  if (obj instanceof Array) {
    obj.forEach(function(v, i) {
      jsonToUnderline(v)
    })
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(function(key) {
      var newKey = hump2Underline(key)
      if (newKey !== key) {
        obj[newKey] = obj[key]
        delete obj[key]
      }
      jsonToUnderline(obj[newKey])
    })
  }
}
