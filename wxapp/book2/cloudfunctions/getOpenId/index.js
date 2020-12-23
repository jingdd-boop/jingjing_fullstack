const cloud = require('wx-server-sdk')

//初始化
cloud.init()

// 云函数入口函数
//一个云函数就是一个项目，独立的 serverless
//main就是入口
exports.main = async (event, context) => {
  //event是一个请求事件
  return event.userInfo
}
