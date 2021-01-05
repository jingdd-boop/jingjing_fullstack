//user 类型 Object name age
const getUserInfo = function(user) {

  //Object 取得key值 Object.keys(user)
  console.log(Object.keys(user).includes('name'))
  //include 判断是否存在 返回true false
  // 里面有name age
  if(!user || typeof user != 'object' || !Object.keys(user).includes('name') || !Object.keys(user).includes('age'))
    throw new Error('参数错误')
  return `name: ${user.name},age: ${user.age}`

}
console.log(getUserInfo({name:'koala',age:10}))
//有什么问题
console.log(getUserInfo({name:'koala'}))
console.log(getUserInfo())
// 限制这种随意性？