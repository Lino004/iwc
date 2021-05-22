<template>
  <div class="">
    <div class="w-auto flex divide-x-2 divide-primary font-bold font-sans text-lg pb-6">
      <a
        class="pr-2 cursor-pointer"
        @click="isMember = true"
        :class="{
          'text-secondary': isMember,
          'text-primary': !isMember
        }">
        Member
      </a>
      <a
        class="pl-2 cursor-pointer"
        @click="isMember = false"
        :class="{
          'text-secondary': !isMember,
          'text-primary': isMember
        }">
        Dentist
      </a>
    </div>

    <div v-if="signIn">
      <sign-in :toggleToPassRT="toggleToPassRT"></sign-in>
    </div>

    <div v-if="passwordResetT">
      <password-reset-token :toggleToSignIn="toggleToSignIn" :toggleToPassR="toggleToPassR"></password-reset-token>
    </div>

    <div v-if="passwordReset">
      <password-reset :toggleToSignIn="toggleToSignIn" :toggleToPassRT="toggleToPassRT"></password-reset>
    </div>

  </div>
</template>

<script>
import PasswordReset from './PasswordReset.vue'
import PasswordResetToken from './PasswordResetToken.vue'
import SignIn from './SignIn.vue'

export default {
  components: {
    SignIn,
    PasswordReset,
    PasswordResetToken
  },
  data () {
    return {
      signIn: true,
      passwordReset: null,
      passwordResetT: null,
      isMember: true
    }
  },
  methods: {
    toggleToPassRT () {
      this.passwordResetT = true
      this.passwordReset = null
      this.signIn = null
    },
    toggleToSignIn () {
      this.passwordResetT = null
      this.passwordReset = null
      this.signIn = true
    },
    toggleToPassR () {
      this.passwordResetT = null
      this.passwordReset = true
      this.signIn = null
    }
  }
}
</script>
