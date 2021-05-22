<template>
  <div>

      <h3 class="section-title">Password Reset</h3>

      <div>
        <form action="" class="grid grid-rows-2 gap-y-11 pt-11">
          <input
            type="text"
            placeholder="Email or Username"
            v-model="email"
            class="input-about"
          />
          <div>
            <button
              class="bg-grid1 hover:bg-secondary text-white rounded-15px py-3 w-full font-bold"
            >
              <router-link to="/profile">SEND RESET TOKEN</router-link>
            </button>
          </div>
        </form>

        <div class="py-6">
          <button @click="toggleToPassR" class="underline text-secondary">
            I have a reset token.
          </button>
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
      email: ''
    }
  },
  props: {
    toggleToSignIn: {
      type: Function
    },
    toggleToPassR: {
      type: Function
    }
  }
}
</script>
