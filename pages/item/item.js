// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (params) {
    wx.showLoading({ title: '拼命加载中...' })
    var _this = this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + params.id,
      header: { 'Content-Type': 'json' },
      success(res){
        console.log(res)
        _this.setData({
          title: res.data.title, 
          movie: res.data
        })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {
    return {
      title: this.data.title,
      desc: this.data.title,
      path: '/pages/item?id=' + this.data.id
    }
  },

  /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {
  },
})
