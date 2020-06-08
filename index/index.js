const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    wx.coymaple.showModal({
      title: '提示',
      content: '请点击确认或取消按钮',
      success({confirm,cancel}){
        console.log(confirm)
        console.log(cancel)
      }
    })
  },
})
