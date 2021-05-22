<template>
  <div>

      <h3 class="section-title">Password Reset</h3>

      <div>
        <form action="" class="grid grid-rows-5 gap-y-11 pt-11">
          <input
            type="text"
            placeholder="Email"
            v-model="email"
            class="input-about"
          />
          <input
            type="text"
            placeholder="Reset Token"
            v-model="resetToken"
            class="input-about"
          />
          <input
            type="text"
            placeholder="New Password"
            v-model="newPassword"
            class="input-about"
          />
          <input
            type="text"
            placeholder="Confirm New Password"
            v-model="confirmPassword"
            class="input-about"
          />
          <div>
            <button
              class="bg-grid1 hover:bg-secondary text-white rounded-15px py-3 w-full font-bold"
            >
              RESET PASSWORD
            </button>
          </div>
        </form>

        <div class="py-6">
          <button @click="toggleToPassRT"
            class="underline text-secondary"
            >I don't have a reset token.</button
          >
        </div>

        <div>
          <button @click="toggleToSignIn" class="text-primary">← <span class="underline">Back to login</span></button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      resetToken: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  props: {
    toggleToSignIn: {
      type: Function
    },
    toggleToPassRT: {
      type: Function
    }
  }
}
</script>
