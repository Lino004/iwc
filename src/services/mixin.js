export default {
  methods: {
    formatPrice (number) {
      return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'PHP', maximumSignificantDigits: 3 }).format(number)
    },
    actionError (error) {
      let messages = [error.message]
      if (error.response && error.response.data) {
        messages = []
        if (error.response.data.errors && Array.isArray(error.response.data.errors)) {
          error.response.data.errors.forEach(err => {
            messages.push(err.detail)
          })
        }
      }
      messages.forEach(msg => {
        this.$toast.open({
          message: msg,
          type: 'error'
        })
      })
    }
  }
}
