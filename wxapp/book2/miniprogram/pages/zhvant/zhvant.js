Page({
  data: {
    goods: {
      title: '荷兰进口Miffy米菲兔',
      price: 2680,
      formatPrice: '',
      express: '免运费',
      remain: 190,
      thumb:
        'https://gw.alicdn.com/bao/uploaded/i1/2206434878500/O1CN01FCltlM2Cf3896dIJ0_!!0-item_pic.jpg',
    },
    
  },
  onLoad() {
    const { goods } = this.data;
    const formatPrice = `¥${(goods.price / 100).toFixed(2)}`;
    this.setData({
      goods: {
        ...goods,
        formatPrice,
      },
    });
  },

  onClickCart() {
    wx.navigateTo({
      url: '/pages/cart/index',
      success: () => {},
      error: () => {
        wx.showToast({
          icon: 'none',
          title: '打开购物车失败',
        });
      },
    });
  },

  onClickUser() {
    wx.navigateTo({
      url: '/pages/user/index',
      success: () => {},
      error: () => {
        wx.showToast({
          icon: 'none',
          title: '打开个人中心失败',
        });
      },
    });
  },

  onClickButton() {
    wx.showToast({
      title: '暂无后续逻辑~',
      icon: 'none',
    });
  },

  sorry() {
    wx.showToast({
      title: '暂无后续逻辑~',
      icon: 'none',
    });
  },
});