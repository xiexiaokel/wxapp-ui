/* 组件说明 */
/* cvsWidth,cvsHeight 分别为画布的宽度和高度，
limitTime：为规定的游戏倒计时时间;

stopCount:是否立即停止倒计时

timeOVer事件是暴露给外部判断倒计时是否结束的事件 */

/*  调用实例 */
/* <circleCountDown cvsWidth="200" cvsHeight= "200" limitTime= "10" bindtimeOver= "myEvent" > </circleCountDown> */




Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cvsWidth: {
      type: String,
    },
    cvsHeight: {
      type: String,
    },
    limitTime: {
      type: String
    },
    stopCount: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    limitTime: 10,
    showCount: true,
    stopCount: false,
    animationData:{}
  },
  ready: function () {
    let { limitTime } = this.data;
    const pi = Math.PI;
    const max_angle = 1.5
    const countTime = limitTime;
    const average_angle = 2 / limitTime;
    this.drawRange(max_angle * pi, limitTime);
    let animation = wx.createAnimation();
    this.animation = animation;
    const countdown = setInterval(() => {
      animation.scale(2, 2).opacity(0).step({
        duration: 850,
        timingFunction: 'ease',
        transformOrigin: '50% 50%'
      });
      animation.scale(1, 1).opacity(1).step({
        duration: 50,
        timingFunction: 'step-start',
        transformOrigin: '50% 50%'
      });
      let { stopCount } = this.data;
      let prevAngle = max_angle - (countTime - limitTime + 2) * average_angle;
      let currAngle = max_angle - (countTime - limitTime + 1) * average_angle;
      let ani_item = (prevAngle - currAngle) / 40;
      let ani_count = 0;
      let animationDraw = setInterval(() => {
        this.drawRange((currAngle + ani_item * ani_count) * pi, limitTime);
        ani_count = ani_count + 1;
        // console.log(ani_count);
        if (ani_count > 40) {
          clearInterval(animationDraw)
        }
      }, 25)
      limitTime = limitTime - 1;
      this.setData({
        limitTime,
        animationData:animation.export()
      })
      if (stopCount == true) {
        this.drawRange(currAngle*pi, limitTime);
        clearInterval(animationDraw);
        clearInterval(countdown);
        this.setData({
          animationData:{}
        })
      }
      if (limitTime < 1) {
        this.setData({
          limitTime: '超时',
          animationData:{},
        })
        this.drawRange(-0.5 * pi, limitTime);
        clearInterval(animationDraw);
        clearInterval(countdown);
        this.timeOver();
      }

    }, 1000)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //画布方法
    drawRange: function (currAngle, time) {
      const { cvsWidth, cvsHeight, } = this.data;
      const radius = cvsWidth / 2, positionX = cvsWidth / 2, positionY = cvsHeight / 2;
      const startAngle = -1 / 2 * Math.PI;
      const ctx = wx.createCanvasContext('myCanvas', this)
      ctx.setFillStyle('#f0f0f0')
      ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.save();
      ctx.beginPath();
      ctx.setFillStyle('#ff8a00');
      ctx.arc(positionX, positionY, radius, startAngle, currAngle, false);
      ctx.lineTo(cvsHeight / 2, cvsWidth / 2);
      ctx.fill();
      ctx.beginPath();
      ctx.setFillStyle('#fff')
      ctx.arc(positionX, positionY, 0.8 * radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.save();
      ctx.draw();
    },
    //倒计时结束触发事件
    timeOver: function () {
      console.log('倒计时结束');
      this.triggerEvent('timeOver');
    }
  }
})
