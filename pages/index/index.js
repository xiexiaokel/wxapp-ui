//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  pageJump:function(e){
    const key = e.currentTarget.dataset.key;
    switch(key){
      case 'countDown':
        wx.navigateTo({
          url: '../countDown/countDown',
        });
        break;
      case 'button':
        wx.navigateTo({
          url: '../button/button',
        });
        break;
      default:
        break;
    }
  }
})
