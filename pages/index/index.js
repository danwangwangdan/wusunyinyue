//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    url:'http://tool.yijingying.com/musictools',
    url2: 'https://www.lanzous.com/b245307',
  },
  //事件处理函数
  copy: function() {
    console.log(this.data.url);
    wx.setClipboardData({
      data: this.data.url,
      success(res) {
       
      }
    })
    wx.showToast({
      title: '复制成功，请前往浏览器打开!',
      icon: 'success',
      duration: 2000
    });
  },
  download: function(){
    wx.setClipboardData({
      data: this.data.url2,
      success(res) {

      }
    })
    wx.showToast({
      title: '复制下载链接成功，请前往浏览器打开!',
      icon: 'success',
      duration: 2000
    });
  },
  onLoad: function () {
    wx.showModal({
      title: '',
      content: '由于版权原因，无法在小程序中下载音乐，请复制链接到浏览器中打开，或者下载Windows版本',
      success: function(res) {
        if (res.confirm) {
         
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
  },

})
