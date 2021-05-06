<template>
  <div>
    <div class="h-6 bg-primary"></div>
    <div class="shadow-box1">
      <div class="py-20">
        <h3
          class="font-bold text-primary font-serif text-center text-3xl md:text-3xl lg:text-42px"
        >
          Contact Form
        </h3>
        <hr
          class="w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 mt-6 mx-auto border-2 border-grid2"
        />
      </div>

      <form novalidate='true' @submit.prevent="checkForm" class="grid grid-rows-1 gap-y-10 pb-24">
        <div class="grid lg:grid-cols-2 w-10/12 mx-auto gap-x-28">
          <div>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Name"
              required
              class="input-contact"
            />
          </div>

          <div>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Contact email"
              required
              class="input-contact"
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
            class="input-contact"
          />
        </div>

        <div class="grid lg:grid-col-1 w-10/12 mx-auto">
          <textarea
            id="message"
            v-model="message"
            placeholder="Your Message"
            rows="10"
            required
            class="input-contact"
          ></textarea>
        </div>

        <div class="flex justify-center">
          <vue-recaptcha
            ref="recaptcha"
            @verify="onVerify"
            @expired="onExpired"
            :sitekey="sitekey">
          </vue-recaptcha>
        </div>

        <div class="grid lg:grid-col-1 w-auto mx-auto">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li :key="error" v-for="error in errors">{{ error }}</li>
            </ul>
          </p>
          <p v-if="isSended">
            Thank you! Your message has been sent successfully.
          </p>
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
import { sendContact } from '@/api/public/contact'

export default {
  data: () => {
    return {
      errors: [],
      name: '',
      email: '',
      subject: '',
      message: '',
      isSended: false,
      captchaToken: '',
      sitekey: '6Ldp_YgaAAAAAMoXM8KRuQQUNCt1vnP52GKVkjZM'
    }
  },
  methods: {
    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validateForm () {
      this.errors = []
      if (!this.name) {
        this.errors.push('Name is required.')
      }
      if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.subject) {
        this.errors.push('Subject is required.')
      }
      if (!this.message) {
        this.errors.push('Message is required.')
      }
      if (!this.captchaToken) {
        this.errors.push('ReCAPTCHA validation required.')
      }
    },
    async checkForm () {
      this.validateForm()
      if (this.errors.length) return
      try {
        await sendContact({
          type: 1,
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
          captchaToken: this.captchaToken
        })
      } catch (error) {
        //
      }
    },
    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute()
    },
    onVerify: function (response) {
      console.log('Verify: ' + response)
    },
    onExpired: function () {
      console.log('Expired')
    },
    resetRecaptcha () {
      this.$refs.recaptcha.reset()
    }
  }
}
</script>

<style scoped>
.input-contact {
  @apply
    w-full my-5 appearance-none border-b-3 border-grid7
    focus:outline-0 focus:border-secondary focus:placeholder-transparent
    hover:outline-0
    text-primary font-sans text-lg placeholder-primary;
}
</style>
