const express = require('express')
const model = require('./model')
const User = model.getModel('user')

// md5加密
const utils = require('utility')
//生成express路由中间件
const Router = express.Router();

// 封装MD5加密规则
function my_md5(pwd) {
  const xiao = 'akdf352FHhjfFHI34=123-`.WRL23K23fhKJFHkhFJ@1231!*@%!^';
  return utils.md5(utils.md5(xiao + pwd))
}

//过滤调不想暴露的数据
const _filter = {"__v": 0, "pwd": 0}

//CheckLogin.js 用户查询是否登陆的接口
Router.get('/info',(req,res) => {
  return res.json({code:1,msg:'未登录'})
})

// 获取注册用户列表
Router.get('/list', (req, res) => {
  //清空所有用户
  // User.remove({}, (err, doc) => {
  //  if (!err) {
  //      console.log(`用户清空成功`);
  //  }
  // })

  // 在user这个数据模型中查询所有用户
  User.find({}, (err, doc) => {
      if (!err) {
          return res.json({code: 0, data: doc, msg: '用户列表获取成功'})
      }
  })
})

// 注册接口
Router.post('/register', (req, res) => {
  const {username, pwd, type} = req.body;
  // 在user这个数据模型中查询用户注册的账号是否存在
  User.findOne({username}, (err, doc) => {
      //
      if (doc) {
          return res.json({code: 1, msg: '用户已存在'})
      }
      if (err) {
          return res.json({code: 1, msg: '服务器异常'})
      }
      User.create({username, pwd: my_md5(pwd), type}, (err, doc) => {
          if (err) {
              return res.json({code: 1, msg: '服务器异常'})
          }
          return res.json({code: 0, data: doc})
      })
  })
})




module.exports = Router