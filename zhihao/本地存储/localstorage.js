let data = {
  name:user.name,
  pass:user.pass
}

存
window.localStorage.setItem('logindata',JSON.stringify(data))

取
JSON.parse(window.localStorage.getItem('logindata'))

移除某个
localStorage.removeItem('logindata')

全部删除
localStorage.clear();