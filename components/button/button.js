/* 组件说明 */
 
/*  
  radius:圆角大小，
  height:按钮高度,
  bgColor:按钮颜色,
  fontColor:文字颜色,
  fontSize:文字大小,
  title:按钮文字,
  openType:对接小程序原生按钮的开放功能,
  disabled:是否禁用按钮
  buttonTap:按钮点击事件
  dataKey:传入的自定义data-key属性,
  borderColor:边框颜色
  hollow:是否是空心还是实心
*/


Component({
  /**
   * 组件的属性列表
   */
  properties: {
      radius:{
        type:String,
      },
      height:{
        type:String,
      },
      bgColor:{
        type:String,
      },
      fontColor:{
        type:String
      },
      fontSize:{
        type:String
      },
      openType:{
        type:String
      },
      title:{
        type:String
      },
      disabled:{
        type:Boolean
      },
      hollow:{
        type:Boolean
      },
      borderColor:{
        type:String
      },
      dataKey:{
        type:String
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    buttonTap:function(e){
      const btnDetails = {
        key:e.currentTarget.dataset.key,
        openTypeDetail:e.detail
      }
      this.triggerEvent('buttonTap', btnDetails);
    }
  }
})
