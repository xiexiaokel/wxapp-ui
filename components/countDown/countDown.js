
/* 组件说明*/
/* 
  bgColor为传入的倒计时背景颜色类型为String的颜色编码,
  count为传入的倒计时开始时间,

  gameStart为倒计时结束的时执行的游戏开始方法，此方法已经暴露给组件调用者，
  可以在调用的地方监听该方法的执行，然后执行自定义的方法,
  组件使用示例：
   <countDown count="3" bgColor="#06c"  bindcountOver="myCustomEvent"></countDown>
*/


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor:{
      type:String
    },
    count:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:'5',//默认倒计时时间
    showCount: true,//是否显示倒计时
    animationData:{},
  },
  
  ready:function(){
    let {count } = this.data;
    let animation = wx.createAnimation()

    this.animation = animation
    let cutdown = setInterval(()=> {
      animation.scale(0.3, 0.3).opacity(1).step({
        duration: 800,
        timingFunction: 'ease',
        transformOrigin: '50% 50%'
      });
      animation.scale(1, 1).opacity(0).step({
        duration: 150,
        timingFunction: 'step-start',
        transformOrigin: '50% 50%'
      });
      this.setData({
        count,
        animationData: animation.export()
      });
      count = count - 1;
      if (count < 0) {
        this.setData({
          count:'开始',
        })
        clearInterval(cutdown);
        setTimeout(()=>{
          this.timeOver();
          this.setData({
            showCount:false
          })
        }, 1000);
      }
    },1000);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    timeOver:function(){
      console.log('倒计时结束，可以执行其他操作');
      this.triggerEvent('timeOver');
    }
  }
})
