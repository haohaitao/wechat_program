import { baseURL } from './config.js'
// export default function getJson(options){
//   return new Promise( (resolve, reject) => {
//     wx.request({
//       urL: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: function (res) {
//         resolve(res)
//       },
//       fail: function (err) {
//         reject(err)
//       }
//     })
//   })
// }
// 等同于
//promise防止出现回调地狱
export default function getJson(options) {
  console.log(options)
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL+ options.url,
      method: options.method || 'get',
      header: { 'Content-Type': 'json' },
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}