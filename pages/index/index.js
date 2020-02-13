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
    start:1,
    count:0,//总数
    total:0 //总数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var _this = this
    wx.showLoading({ title: '拼命加载中...' })
    getJson({
      url: '/v2/movie/coming_soon',
      data:{
        start:0,
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
          console.log(err)
        })
    // this.setData({
    //   listData: {  
    //     "count": 5,
    //     "start": 0,
    //     "total": 22,
    //     "subjects": [{
    //       "rating": {
    //         "max": 10,
    //         "average": 0,
    //         "details": {
    //           "1": 0, 
    //           "2": 0,
    //           "3": 0,
    //           "4": 0,
    //           "5": 0
    //         },
    //         "stars": "00",
    //         "min": 0
    //       },
    //       "genres": [
    //         "剧情"
    //       ],
    //       "title": "应承",
    //       "casts": [{
    //         "avatars": {
    //           "small": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1381744526.75.webp",
    //           "large": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1381744526.75.webp",
    //           "medium": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1381744526.75.webp"
    //         },
    //         "name_en": "Yuanzheng Feng",
    //         "name": "冯远征",
    //         "alt": "https://movie.douban.com/celebrity/1043136/",
    //         "id": "1043136"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6028.webp",
    //           "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6028.webp",
    //           "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6028.webp"
    //         },
    //         "name_en": "Kesheng Lei",
    //         "name": "雷恪生",
    //         "alt": "https://movie.douban.com/celebrity/1274724/",
    //         "id": "1274724"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540543441.9.webp",
    //           "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540543441.9.webp",
    //           "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540543441.9.webp"
    //         },
    //         "name_en": "Feifei Yu",
    //         "name": "于非非",
    //         "alt": "https://movie.douban.com/celebrity/1403296/",
    //         "id": "1403296"
    //       }
    //       ],
    //       "durations": [
    //         "97分钟"
    //       ],
    //       "collect_count": 15,
    //       "mainland_pubdate": "2020-02-24",
    //       "has_video": false,
    //       "original_title": "应承",
    //       "subtype": "movie",
    //       "directors": [{
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540542258.43.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540542258.43.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1540542258.43.webp"
    //         },
    //         "name_en": "Jun Wang",
    //         "name": "王军",
    //         "alt": "https://movie.douban.com/celebrity/1403293/",
    //         "id": "1403293"
    //       }],
    //       "pubdates": [
    //         "2020-02-24(中国大陆)"
    //       ],
    //       "year": "2020",
    //       "images": {
    //         "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578598210.webp",
    //         "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578598210.webp",
    //         "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578598210.webp"
    //       },
    //       "alt": "https://movie.douban.com/subject/34834769/",
    //       "id": "34834769"
    //     },
    //     {
    //       "rating": {
    //         "max": 10,
    //         "average": 5.9,
    //         "details": {
    //           "1": 22,
    //           "2": 149,
    //           "3": 404,
    //           "4": 103,
    //           "5": 28
    //         },
    //         "stars": "30",
    //         "min": 0
    //       },
    //       "genres": [
    //         "科幻",
    //         "灾难"
    //       ],
    //       "title": "呼吸",
    //       "casts": [{
    //         "avatars": {
    //           "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1267.webp",
    //           "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1267.webp",
    //           "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1267.webp"
    //         },
    //         "name_en": "Romain Duris",
    //         "name": "罗曼·杜里斯",
    //         "alt": "https://movie.douban.com/celebrity/1018093/",
    //         "id": "1018093"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22061.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22061.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22061.webp"
    //         },
    //         "name_en": "Olga Kurylenko",
    //         "name": "欧嘉·柯瑞兰寇",
    //         "alt": "https://movie.douban.com/celebrity/1035654/",
    //         "id": "1035654"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pWljH87F883wcel_avatar_uploaded1514184671.02.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pWljH87F883wcel_avatar_uploaded1514184671.02.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pWljH87F883wcel_avatar_uploaded1514184671.02.webp"
    //         },
    //         "name_en": "Fantine Harduin",
    //         "name": "芳汀·阿杜安",
    //         "alt": "https://movie.douban.com/celebrity/1386133/",
    //         "id": "1386133"
    //       }
    //       ],
    //       "durations": [
    //         "89分钟"
    //       ],
    //       "collect_count": 4077,
    //       "mainland_pubdate": "2020-02-29",
    //       "has_video": false,
    //       "original_title": "Dans la brume",
    //       "subtype": "movie",
    //       "directors": [{
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1523497248.81.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1523497248.81.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1523497248.81.webp"
    //         },
    //         "name_en": "Daniel Roby",
    //         "name": "丹尼尔·罗比",
    //         "alt": "https://movie.douban.com/celebrity/1307976/",
    //         "id": "1307976"
    //       }],
    //       "pubdates": [
    //         "2018-04-04(法国)",
    //         "2020-02-29(中国大陆)"
    //       ],
    //       "year": "2018",
    //       "images": {
    //         "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2568926037.webp",
    //         "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2568926037.webp",
    //         "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2568926037.webp"
    //       },
    //       "alt": "https://movie.douban.com/subject/27172872/",
    //       "id": "27172872"
    //     },
    //     {
    //       "rating": {
    //         "max": 10,
    //         "average": 0,
    //         "details": {
    //           "1": 0,
    //           "2": 0,
    //           "3": 0,
    //           "4": 0,
    //           "5": 0
    //         },
    //         "stars": "00",
    //         "min": 0
    //       },
    //       "genres": [
    //         "喜剧",
    //         "爱情",
    //         "奇幻"
    //       ],
    //       "title": "月半爱丽丝",
    //       "casts": [{
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513504182.91.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513504182.91.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513504182.91.webp"
    //         },
    //         "name_en": "Xiaotong Guan",
    //         "name": "关晓彤",
    //         "alt": "https://movie.douban.com/celebrity/1276032/",
    //         "id": "1276032"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515637640.69.webp",
    //           "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515637640.69.webp",
    //           "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515637640.69.webp"
    //         },
    //         "name_en": "Johnny Huang",
    //         "name": "黄景瑜",
    //         "alt": "https://movie.douban.com/celebrity/1354442/",
    //         "id": "1354442"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1546016193.04.webp",
    //           "large": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1546016193.04.webp",
    //           "medium": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1546016193.04.webp"
    //         },
    //         "name_en": "Darren Chen",
    //         "name": "官鸿",
    //         "alt": "https://movie.douban.com/celebrity/1375409/",
    //         "id": "1375409"
    //       }
    //       ],
    //       "durations": [

    //       ],
    //       "collect_count": 54,
    //       "mainland_pubdate": "2020-03-06",
    //       "has_video": false,
    //       "original_title": "月半爱丽丝",
    //       "subtype": "movie",
    //       "directors": [{
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524243670.61.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524243670.61.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524243670.61.webp"
    //         },
    //         "name_en": "Linzi Zhang",
    //         "name": "张林子",
    //         "alt": "https://movie.douban.com/celebrity/1319252/",
    //         "id": "1319252"
    //       }],
    //       "pubdates": [
    //         "2020-03-06(中国大陆)"
    //       ],
    //       "year": "2020",
    //       "images": {
    //         "small": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2580211645.webp",
    //         "large": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2580211645.webp",
    //         "medium": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2580211645.webp"
    //       },
    //       "alt": "https://movie.douban.com/subject/30389258/",
    //       "id": "30389258"
    //     },
    //     {
    //       "rating": {
    //         "max": 10,
    //         "average": 0,
    //         "details": {
    //           "1": 0,
    //           "2": 0,
    //           "3": 0,
    //           "4": 0,
    //           "5": 0
    //         },
    //         "stars": "00",
    //         "min": 0
    //       },
    //       "genres": [
    //         "剧情",
    //         "家庭"
    //       ],
    //       "title": "五彩缤纷",
    //       "casts": [{
    //         "avatars": {
    //           "small": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551253502.84.webp",
    //           "large": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551253502.84.webp",
    //           "medium": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1551253502.84.webp"
    //         },
    //         "name_en": "Zhu Zhu",
    //         "name": "朱珠",
    //         "alt": "https://movie.douban.com/celebrity/1317092/",
    //         "id": "1317092"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17309.webp",
    //           "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17309.webp",
    //           "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17309.webp"
    //         },
    //         "name_en": "Amy Irving",
    //         "name": "艾米·欧文",
    //         "alt": "https://movie.douban.com/celebrity/1049684/",
    //         "id": "1049684"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451362580.85.webp",
    //           "large": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451362580.85.webp",
    //           "medium": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451362580.85.webp"
    //         },
    //         "name_en": "Yanan Li",
    //         "name": "李雅男",
    //         "alt": "https://movie.douban.com/celebrity/1336331/",
    //         "id": "1336331"
    //       }
    //       ],
    //       "durations": [
    //         "87分钟"
    //       ],
    //       "collect_count": 14,
    //       "mainland_pubdate": "2020-03-06",
    //       "has_video": false,
    //       "original_title": "五彩缤纷",
    //       "subtype": "movie",
    //       "directors": [{
    //         "avatars": {
    //           "small": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361698455.65.webp",
    //           "large": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361698455.65.webp",
    //           "medium": "https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361698455.65.webp"
    //         },
    //         "name_en": "Ann Hu",
    //         "name": "胡安",
    //         "alt": "https://movie.douban.com/celebrity/1287040/",
    //         "id": "1287040"
    //       }],
    //       "pubdates": [
    //         "2020-03-06(中国大陆)"
    //       ],
    //       "year": "2020",
    //       "images": {
    //         "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2580890062.webp",
    //         "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2580890062.webp",
    //         "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2580890062.webp"
    //       },
    //       "alt": "https://movie.douban.com/subject/27176831/",
    //       "id": "27176831"
    //     },
    //     {
    //       "rating": {
    //         "max": 10,
    //         "average": 0,
    //         "details": {
    //           "1": 0,
    //           "2": 0,
    //           "3": 0,
    //           "4": 0,
    //           "5": 0
    //         },
    //         "stars": "00",
    //         "min": 0
    //       },
    //       "genres": [
    //         "悬疑",
    //         "惊悚"
    //       ],
    //       "title": "82号古宅",
    //       "casts": [{
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1432022356.52.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1432022356.52.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1432022356.52.webp"
    //         },
    //         "name_en": "Tian Ge",
    //         "name": "葛天",
    //         "alt": "https://movie.douban.com/celebrity/1342863/",
    //         "id": "1342863"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1579166170.43.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1579166170.43.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1579166170.43.webp"
    //         },
    //         "name_en": "Tianyi Hu",
    //         "name": "扈天翼",
    //         "alt": "https://movie.douban.com/celebrity/1413401/",
    //         "id": "1413401"
    //       },
    //       {
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1543112886.62.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1543112886.62.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1543112886.62.webp"
    //         },
    //         "name_en": "Tiara Huang",
    //         "name": "黄心娣",
    //         "alt": "https://movie.douban.com/celebrity/1405222/",
    //         "id": "1405222"
    //       }
    //       ],
    //       "durations": [
    //         "87分钟"
    //       ],
    //       "collect_count": 5,
    //       "mainland_pubdate": "2020-03-06",
    //       "has_video": false,
    //       "original_title": "82号古宅",
    //       "subtype": "movie",
    //       "directors": [{
    //         "avatars": {
    //           "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403760339.52.webp",
    //           "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403760339.52.webp",
    //           "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403760339.52.webp"
    //         },
    //         "name_en": "Jie Yuan",
    //         "name": "袁杰",
    //         "alt": "https://movie.douban.com/celebrity/1340990/",
    //         "id": "1340990"
    //       }],
    //       "pubdates": [
    //         "2020-03-06(中国大陆)"
    //       ],
    //       "year": "2020",
    //       "images": {
    //         "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2581403670.webp",
    //         "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2581403670.webp",
    //         "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2581403670.webp"
    //       },
    //       "alt": "https://movie.douban.com/subject/30468745/",
    //       "id": "30468745"
    //     }
    //     ],
    //     "title": "即将上映的电影"
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  // 上拉加载请求
  pullUp(start) {
    if (this.data.listData.length == this.data.total) {
      wx.showToast({
        title: '已加载全部内容~',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showLoading({ title: '拼命加载中...' })
      getJson({
        url: '/v2/movie/coming_soon',
        data: {
          start: (start - 1) * 20,
          count: 20
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.pullUp(++this.data.start)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '今年即将上映的电影~',
      path: '/pages/index/index'
    }
  }
})