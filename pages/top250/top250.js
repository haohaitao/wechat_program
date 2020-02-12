// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    subtitle: '加载中...',
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this
    wx.showLoading({ title: '拼命加载中...' })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      header: { 'Content-Type': 'json' },
      success(res) {
        console.log(res)
        wx.hideLoading()
        _this.setData({
          listData: res.data
        })
      }
    })
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
    console.log('下拉了')
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

  }
})