<template>
  <section class="py-20 w-11/12 lg:w-3/4 mx-auto">
    <div v-if="!isApply">
      <h3 class="section-title my-10">Apply for Dentist Accreditation</h3>
      <p class="text-2xl text-primary ml-10 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ante quis tellus vehicula porttitor id id est. Aliquam porta aliquet posuere.
      </p>
      <personal-information></personal-information>
      <contact-information></contact-information>
      <dental-clinic-information></dental-clinic-information>

      <hr class="border-t-3 border-grid7">

      <div class="flex justify-end mt-10">
        <div class="w-full md:w-96 flex items-center md:items-end flex-col">
          <div class="mb-5">
            <input
              type="checkbox"
              id="term"
              name="term"
              checked
              class="mr-5">
            <label
              for="term"
              class="text-lg">
              I accept the
              <span class="text-secondary underline">
                Terms and Conditions
              </span>.
            </label>
          </div>

          <vue-recaptcha
            v-if="sitekey"
            ref="recaptcha"
            @verify="onVerify"
            @expired="onExpired"
            :sitekey="sitekey"
            class="mb-5">
          </vue-recaptcha>

          <div class="text-right">
            <button
              class="iwc-btn-action bg-grid1 w-auto px-8"
              @click="actionApply">
              APPLY
            </button>
          </div>
        </div>
      </div>
    </div>
    <is-apply
      v-else
      title="Application Sent!"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ante quis tellus vehicula porttitor id id est. Aliquam porta aliquet posuere."
      text-btn="CONTINUE"
      @is-click="actionContinue">
    </is-apply>
  </section>
</template>

<script>
import PersonalInformation from '@/components/public/applyForAccreditation/PersonalInformation'
import ContactInformation from '@/components/public/applyForAccreditation/ContactInformation'
import DentalClinicInformation from '@/components/public/applyForAccreditation/DentalClinicInformation'

export default {
  components: {
    PersonalInformation,
    ContactInformation,
    DentalClinicInformation
  },
  data: () => {
    return {
      captchaToken: '',
      sitekey: '',
      isApply: false
    }
  },
  methods: {
    onSubmit () {
      this.$refs.invisibleRecaptcha.execute()
    },
    onVerify (response) {
      this.captchaToken = response
    },
    onExpired () {
      this.captchaToken = ''
    },
    resetRecaptcha () {
      this.$refs.recaptcha.reset()
    },
    actionApply () {
      this.isApply = true
    },
    actionContinue () {
      this.isApply = false
    }
  },
  mounted () {
    this.sitekey = process.env.VUE_APP_KEY_RECAPTCHA
  }
}
</script>
