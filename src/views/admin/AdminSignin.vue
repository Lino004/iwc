<template>
  <div class="h-full bg-gradient-to-b from-primary to-grid1 flex justify-center items-center">
    <div class="bg-white rounded-2xl w-3/4 md:w-1/2 p-10">
      <figure>
        <img class="mx-auto" src="@/assets/images/logo.svg" alt="">
      </figure>
      <h3 class="section-title my-10">Admin Sign In</h3>
      <form @submit.prevent="" class="space-y-10">
        <input
          type="email"
          id="EmailAdress"
          placeholder="Email Address"
          class="input-about"
        />
        <input
          type="text"
          id="Password"
          placeholder="Password"
          class="input-about"
        />
        <button
          class="iwc-btn-action bg-grid1">
          SIGN IN
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
