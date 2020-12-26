const db = wx.cloud.database()
const userInfo1 = db.collection('userInfo1')

Page({
  data: {
    userList: []
  },
  navigatTo() {

  },
  getUserInfo(result) {
    // console.log(result.detail.userInfo);
    //一切的云开发都是从调用一个函数开始
    //登录
    //一次上云事件
    wx.cloud.callFunction({
      name: 'getUserId',
      //回调函数
      complete: res => {
      //res返回结果
      console.log(res);
      //where 对应mysql的条件查询
      userInfo1.where({
        //去云端就是为了拿openId
        //用户的openId是唯一的
        _openid:res.result.openId
      }).count().then( res => {
          console.log(res);
          if(res.total == 0) {
            //插入一个数据
            //Insert 插入一条数据 
            userInfo1.add({
              // 一定要有一个data 一个JSON
              data: result.detail.userInfo
            }).then(res => {
              wx.navigateTo({
                url: '../add/add',
              })
            }).catch(err => {
              console.error(err)
            })
          } else {
            wx.navigateTo({
              url: '../add/add',
            })

          }
      })   
      }
    })
  }
})