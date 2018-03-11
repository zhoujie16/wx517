Page({

  /**
   * 页面的初始数据
   */
  data: {
    listImgSrc:'http://zhoujie16.gitee.io/link/timeLine.jpg',
    // listImgSrc: '../../imgs/list.jpg',http://zhoujie16.gitee.io/link/xiaoxingyun.mp3
    imgShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title:'耐心等待下...',
      mask:true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
  backTap:function(){
    wx.navigateBack()
  },
  listImgLoad:function(){
    console.log('listImgLoad');
    this.setData({
      imgShow:true
    });
    wx.hideLoading()
  }
})