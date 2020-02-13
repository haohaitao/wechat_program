// pages/news/news.js
import getJson from '../../utils/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    subtitle: '加载中...',
    listData: [],
    start: 1,
    count: 0,//总数
    total: 0 //总数
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
    getJson({
      url: '/v2/movie/top250',
      data: {
        start: 0,
        count: 20
      }
    }).then( res=>{
      wx.hideLoading()
      res.data.subjects.forEach((ele) => {
        ele.subtype = 'rating-star allstar' + Math.ceil(ele.rating.average)
      })
      _this.setData({
        listData: res.data.subjects,
        count: res.data.count,
        total: res.data.total
      })
    }).catch( err=>{
      console.log('top250...',err)
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
  },
  pullUp(start) {
    console.log(this.data)
    if (this.data.listData.length == this.data.total) {
      wx.showToast({
        title: '已加载全部内容~',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showLoading({ title: '拼命加载中...' })
      getJson({
        url: '/v2/movie/top250',
        data: {
          start: (start - 1) * 20,
          count:20
        }
      }).then(res => {
        if (res.data.subjects.length) {
          res.data.subjects.forEach((ele) => {
            ele.subtype = 'rating-star allstar' + Math.ceil(ele.rating.average)
          })
          this.setData({ 
            listData: this.data.listData.concat(res.data.subjects) 
            })
        } 
        wx.hideLoading()
      }).catch(err => {
        console.log(err)
      })
    }
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.pullUp(++this.data.start)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '排名前250的电影都在这里！',
      path: '/pages/top250/top250'
    }
  }
})