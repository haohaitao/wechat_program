// 创建页面实例对象
import getJson from '../../utils/network.js'
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
    getJson({
      url: '/v2/movie/subject/' + params.id
    }).then( res=>{
      wx.hideLoading()
      _this.setData({
        title: res.data.title,
        movie: res.data
      })
    }).catch( err=>{
      console.log('电影详情页..',err)
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
      title: '《' + this.data.title + '》的电影详情~',
      path: '/pages/item?id=' + this.data.id
    }
  },

  /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {
  },
})
