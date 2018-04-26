//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    paeAnimation:{},
    stopCount:false
  },
  myCustomEvent:function(){
    let animation = wx.createAnimation({
      
    });
    animation.scale(5, 5).opacity(1).step({
      duration: 900,
      timingFunction: 'ease',
      transformOrigin: '50% 50%'
    });
    this.setData({
      paeAnimation:animation.export()
    })
  },
  myEvent:function(){
    console.log('倒计时结束开始执行其他方法')
  },
  //立即停止倒计时
  stopCount: function () {
    this.setData({
      stopCount: true
    })
  }
})
