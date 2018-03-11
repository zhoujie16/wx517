//index.js
//获取应用实例
const app = getApp();
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "H+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tapIndex: 0,
    animationData: {},
    timeNum: 0,
    timeTxt: '',
    days: 0,
    hours_all: 0,
    minutes_all: 0,
    seconds_all: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var date_meet = '2017/05/17 09:41:00'; //开始时间 
    var timer = setInterval(function () {
      var days = computeTimeDiff(date_meet, 'days');
      var hours_all = computeTimeDiff(date_meet, 'hours');
      var minutes_all = computeTimeDiff(date_meet, 'minutes');
      var seconds_all = computeTimeDiff(date_meet, 'seconds');
      console.log('天', days, '小时', hours_all, '分钟', minutes_all, '秒', seconds_all);
      self.setData({
        days: days,
        hours_all: hours_all,
        minutes_all: minutes_all,
        seconds_all: seconds_all,
      });
    }, 100);
    //计算时间差
    function computeTimeDiff(endDate, type) {
      var nowDate = new Date(); //结束时间  
      var date_diff = nowDate.getTime() - new Date(endDate).getTime(); //时间差的毫秒数
      if (type === 'days') {
        return Number(((new Date(nowDate.Format('yyyy/MM/dd')).getTime() - new Date(date_meet).getTime()) / 86400000).toFixed(0)) + 1;
      } else if (type === 'hours') {
        return Math.floor(date_diff / (1000 * 60 * 60));
      } else if (type === 'minutes') {
        return Math.floor(date_diff / (1000 * 60));
      } else if (type === 'seconds') {
        return Math.floor(date_diff / 1000);
      }
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.title = '小幸运'
    backgroundAudioManager.singer = '田馥甄'
    backgroundAudioManager.coverImgUrl = 'http://pic.xiami.net/images/album/img49/360049/11364555381520360052.jpg@4e_1c_100Q_185w_185h'
    backgroundAudioManager.src = 'http://zhoujie16.gitee.io/link/xiaoxingyun.mp3' // 设置了 src 之后会自动播放
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  playMusic: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '汪峰'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = '../../audio/bg01.mp3'
  },
  menuTap: function () {
    console.log('点击菜单');
    wx.navigateTo({
      url: '../timeList/timeList'
    })
  },
  timeTap: function () {
    console.log('时间点击');
    //第一段动画 隐藏
    var animation1 = wx.createAnimation({
      transformOrigin: "10% 30%",
      duration: 1000,
      timingFunction: 'ease',
    });
    var animation2 = wx.createAnimation({
      transformOrigin: "10% 30%",
      duration: 1000,
      timingFunction: 'ease',
    });
    animation1.scaleX(0).scaleY(0).opacity(0).step();
    this.setData({
      animationData: animation1.export()
    });
    setTimeout(function () {
      this.setData({
        tapIndex: this.data.tapIndex + 1
      });
      animation2.scaleX(1).scaleY(1).opacity(1).step();
      this.setData({
        animationData: animation2.export()
      })
    }.bind(this), 1000)





  }
})
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   },
//   showBigDays:function(){
//     console.log('sss');
//   }
// });
