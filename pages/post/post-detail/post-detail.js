// pages/post/post-detail/post-detail.js
import {DBPost} from '../../../db/DBPost.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取postId  与query参数名保持一致
    var postId=options.id;
    this.dbPost=new DBPost(postId);
    this.postData = this.dbPost.getPostItemById().data;
    this.setData({
      post:this.postData
    })
  },
  // 收藏事件
  onCollectionTap(event){
    var newData=this.dbPost.collect();
    this.setData({
      'post.collectionStatus': newData.collectionStatus,
      'post.commentNum': newData.commentNum,
    })
    wx.showToast({
      title: newData.collectionStatus?"收藏成功":"收藏失败",
      icon:'success',
      duration:1000,
      mask:true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   * 一般在这里进行界面设置
   */
  onReady: function () {
    // 动态设置导航栏标题
    wx.setNavigationBarTitle({
      title: this.postData.title,
    })
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
  
  }
})