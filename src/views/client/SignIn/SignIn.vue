<template>
  <modal>
    <div class=" md:w-2/3 lg:w-1/2 xl:w-5/12 mx-4 md:mx-auto bg-white rounded-2xl p-10 lg:py-16 lg:px-24 relative text-primary">
      <router-link to="/" tag="a" class="absolute top-5 lg:top-10 right-10 lg:right-20 cursor-pointer">
        <i class="mdi mdi-close text-2xl"></i>
      </router-link>

      <div class="w-auto flex divide-x-2 divide-primary font-bold font-sans text-lg pb-6">
        <p class="pr-2 text-secondary">Member</p>
        <p class="pl-2 text-primary">Dentist</p>
      </div>

      <h3
        class="font-bold text-primary font-serif text-2xl sm:text-3xl md:text-3xl lg:text-42px"
      >
        Sign In
      </h3>

      <div>
        <form action="" class="grid grid-rows-3 gap-y-11 pt-11">
          <input type="text" placeholder="Email or Username" v-model="email" class="input-about">
          <input type="password" placeholder="Password" v-model="password" class="input-about">
          <div>
            <button class="bg-grid1 hover:bg-secondary text-white rounded-15px py-3 w-full font-bold">
              <router-link to="/profile">SIGN IN</router-link>
            </button>
          </div>
        </form>
        <div class="pt-6">
          <router-link to="/password-reset-token" class="underline text-secondary">Password Reset</router-link>
        </div>
      </div>

    </div>
  </modal>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
