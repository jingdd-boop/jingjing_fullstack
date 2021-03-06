// miniprogram/pages/add/add.js
const db = wx.cloud.database()
const photos = db.collection('photos')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  upLoad() {
    //上传图片，或者拍照
    wx.chooseImage({
      count:9,
      // 压缩与否 
      sizeType: ['original', 'compressed'],
      // 相册， 拍摄
      sourceType: ['album', 'camera'],
      success: res => {
        // 拿到图片文件 
        console.log(res);
        const tempFilePaths = res.tempFilePaths
        //每张图片单独做
        for(var i = 0; i < tempFilePaths.length; i ++ ){
          //生成图片的文件名，产生一个唯一的随机数
          let randString = Math.floor(Math.random() * 1000000).toString() + '.png'
          //向云端上传文件
          wx.cloud.uploadFile({
            cloudPath: randString, 
            // 上传至云端的路径 
            //目的地址
            filePath: tempFilePaths[i], 
            // 小程序临时文件路径 
            //文件地址
            success: res => {
              //console.log(res)
              photos.add({
                data: {
                  image: res.fileID
                }
              }).then(res => {
                wx.showToast({
                  title: '上传成功',
                  icon: 'success'
                })
              })
            },
            fail: console.error
          })
        }
      
      },
      fail: err => {
        console.error(err)
      }
    })

  }
})