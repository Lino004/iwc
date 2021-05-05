<template>
  <div>
    <div class="h-6 bg-primary"></div>
    <div class="shadow-box1">
      <div class="py-20">
        <h3
          class="font-bold text-primary font-serif text-center text-2xl sm:text-3xl md:text-3xl lg:text-42px"
        >
          Contact Form
        </h3>
        <hr
          class="w-1/2 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 mt-6 mx-auto border-2 border-grid2"
        />
      </div>

      <form novalidate='true' @submit="checkForm" class="grid grid-rows-1 gap-y-10 pb-24">
        <div class="grid lg:grid-cols-2 w-10/12 mx-auto gap-x-28">
          <div>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Name"
              required
              class="w-full my-5 h-14 appearance-none input  focus:outline-0 hover:outline-0 text-primary font-sans sm:text-lg placeholder-primary"
            />
          </div>

          <div>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Contact email"
              required
              class="w-full my-5 h-14 appearance-none input  focus:outline-0 hover:outline-0 text-primary font-sans sm:text-lg placeholder-primary"
            />
          </div>
        </div>

        <div class="grid lg:grid-col-1 w-10/12 mx-auto">
          <input
            id="subject"
            v-model="subject"
            type="text"
            placeholder="Subject"
            required
            class="w-full my-5 h-14 appearance-none input focus:outline-0 hover:outline-0 text-primary placeholder-primary font-sans sm:text-lg"
          />
        </div>

        <div class="grid lg:grid-col-1 w-10/12 mx-auto">
          <textarea
            id="message"
            placeholder="Your Message"
            rows="10"
            required
            class="w-full my-5 appearance-none input  focus:outline-0 hover:outline-0 text-primary placeholder-primary font-sans sm:text-lg"
          ></textarea>
        </div>

        <div class="grid lg:grid-col-1 w-auto mx-auto">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li :key="error" v-for="error in errors">{{ error }}</li>
            </ul>
          </p>
          {{ confirmationText }}
        </div>

        <div class="grid lg:grid-col-1 w-auto mx-auto">
          <button type="submit" class="bg-grid1 rounded-15px font-sans font-bold text-white px-5 py-2 text-lg hover:bg-secondary">
            SUBMIT
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      errors: [],
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []

      if (!this.name) {
        this.errors.push('Name is required.')
      }

      if (!this.email) {
        this.errors.push('Email is required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }

      if (!this.subject) {
        this.errors.push('Subject is required.')
      }

      if (!this.message) {
        this.errors.push('Message is required.')
      }

      if (!this.errors.length) {
        return true
      }

      e.preventDefault()
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style scoped>
.input {
  border-top: none;
  border-bottom: 3px solid #c4c8cd;
}
</style>
