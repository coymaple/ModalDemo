// modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    show: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    success: null,
    fail: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initModal() {
      wx.coymaple = wx.coymaple || {}
      wx.coymaple.showModal = (options) => {
        const {
          title,
          content,
          success,
          fail,
        } = options
        this.setData({
          title,
          content,
          show: true,
          success,
          fail,
        })
      }
    },

    onConfirm() {
      let detail = 'confirm'
      const {
        success
      } = this.data
      success && success({
        confirm: true,
        cancel: false
      })
      this.setData({
        show: !this.data.show
      })
      this.triggerEvent('confirm', detail, {})
    },

    onCancel() {
      let detail = 'cancel'
      const {
        success
      } = this.data
      success && success({
        confirm: false,
        cancel: true
      })
      this.setData({
        show: !this.data.show
      })
      this.triggerEvent('confirm', detail, {})
    },
  },
  lifetimes: {
    attached() {
      this.initModal()
    }
  }
})