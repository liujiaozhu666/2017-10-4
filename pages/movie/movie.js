// pages/logs/logs.js
var subjectUtil = require('../../utils/subjectUtils.js')
var app = getApp();
Page({
  data: {
      imgUrls: [
        '/assets/img/001.jpg',
        '/assets/img/002.jpg',
        '/assets/img/003.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      movies:[],
      hidden:false
  },
  onLoad: function (options) {
    this.loadMovie();
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  loadMovie:function(){
    var page = this;
    wx.request({
      url:'https://api.douban.com/v2/movie/in_theaters',
      header:{
        'Content-Type':'json'
      },
      success:function(res){
        var subjects = res.data.subjects;
        subjectUtil.processSubjects(subjects);
        page.setData({ movies: subjects, hidden: true});
      }
    })
  }
})