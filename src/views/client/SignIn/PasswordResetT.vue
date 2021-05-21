<template>
  <modal>
    <div
      class=" md:w-2/3 lg:w-1/2 xl:w-5/12 mx-4 md:mx-auto bg-white rounded-2xl p-10 lg:py-16 lg:px-24 relative text-primary"
    >
      <router-link
        to="/"
        tag="a"
        class="absolute top-5 lg:top-10 right-10 lg:right-20 cursor-pointer"
      >
        <i class="mdi mdi-close text-2xl"></i>
      </router-link>

      <div class="w-auto flex divide-x-2 font-bold font-sans text-lg pb-6">
        <p class="pr-2 text-secondary">Member</p>
        <p class="pl-2 text-grid9">Dentist</p>
      </div>

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
          <router-link to="/password-reset" class="underline text-secondary">
            I have a reset token.
          </router-link>
        </div>

        <div>
          <router-link to="/signIn" class="text-primary">← <span class="underline">Back to login</span></router-link>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  }
}
</script>
