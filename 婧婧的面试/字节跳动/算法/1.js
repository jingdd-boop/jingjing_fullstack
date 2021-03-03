function underline(s) {
  return s.replace(/_(\w)/g,function(all,letter) {
    //把letter变成all，就是把_w变成W
    // console.log(all);
    // console.log(letter)
    return letter.toUpperCase()
  })
}
underline('hello_world')
////	匹配字母、数字、下划线。
//replace(regexp,replacement) 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
//regexp　必需。规定了要替换的模式的 RegExp 对象。
//replacement　必需。一个字符串值。规定了替换文本或生成替换文本的函数。 

var obj = {  
  red_apple:'111',  
  blue_apple:[
    {   green_apple:
      {    
        orange_apple:'222'   
      }  
    },
    {   red_apple:
      {    
        orange1_apple:'122'   
      }  
    }
  ]
}

function jsonToHump(obj) {
  if (obj instanceof Array) {
    //forEach方法中的function回调有三个参数：第一个参数是遍历的数组内容，
    //第二个参数是对应的数组索引，第三个参数是数组本身
    obj.forEach(function(v,i) {
      jsonToHump(v)
    })
  } else if (obj instanceof Object) {
    
    // console.log(Object.keys(obj))
    Object.keys(obj).forEach(function(key) {
      var newKey = underline(key);
      // console.log(newKey)
      if (newKey !== key) {
        obj[newKey] = obj[key]
        delete obj[key]
      }
      jsonToHump(obj[newKey])
    })
  }
  return obj
}


console.log(jsonToHump(obj))