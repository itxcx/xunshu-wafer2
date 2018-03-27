// pages/showAddBook/showAddBook.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId:'',
    tbname:'',
    booklist:{},
    requestResult:'',
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    bookimg:'https://img3.doubanio.com/lpic/s29376146.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this    
    this.setData({
      openId: options.openId,
      tbname: options.tbname
    });
    var value = {
      openId: options.openId,
      tbname: options.tbname
    }
    console.log(value);
    qcloud.request({
      url: `${config.service.host}/weapp/showbook`,
      login: true,
      data: value,
      success(result) {
        // util.showSuccess('请求成功完成')
        // console.log(result);
        var len = result.data.data.length;
        var list = [];
        for(var i = 0;i<len;i++){
          list.push(JSON.parse(result.data.data[i].book_info));
        }
        console.log(list);
        that.setData({
          booklist: list,
          requestResult: JSON.stringify(result.data)
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
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
  
  }
})