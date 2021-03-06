const {login}  = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/restModel')

//获取cookie的过期时间
const getCookieExpress= () => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  console.log('d.toGMTString() is',d.toGMTString())
  return d.toGMTString()
}

const handleUserRouter = (req,res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];

  //登录
  if(method === 'GET' && path === '/api/user/login') {
    // const {username,password} = req.body
    const {username,password} = req.query
    console.log(req.query)
    const result = login(username,password)
    return result.then(data => {
      if(data.username) {
        //操作cookie
        // res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; express=${getCookieExpress()}`)
        req.session.username = data.username
        req.session.realname = data.realname
        return new SuccessModel();
      }
      return new ErrorModel('登录失败')
    })
    
  }
  //登录测试
  if(method === 'GET' && path === '/api/user/login-test') {
    if(req.session.username) {
      return Promise.resolve(
        new SuccessModel({
          session: req.session

        }
          // req.cookie.username
          )
        );
    }
   return Promise.resolve(new ErrorModel('没有登录'))
  }
}

module.exports = handleUserRouter