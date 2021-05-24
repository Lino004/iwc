<template>
  <div class="font-sans text-lg">
    <div
      class="text-primary font-bold border-t-3 border-b-3 border-grid7 py-6 pl-20"
      :class="{
        'text-secondary': onInput
      }"
    >
      SETTINGS
    </div>
    <div class="py-16">
      <form action="" class="grid grid-cols-1 gap-10 lg:w-1/2">
        <div>
          <input
            type="password"
            id="oldPassword"
            v-model="oldPassword"
            placeholder="Old Password"
            class="input-about"
            @focus="onInput = true"
            @blur="onInput = false"
          />
        </div>

        <div>
          <input
            type="password"
            id="newPassword"
            v-model="newPassword"
            placeholder="New Password"
            class="input-about"
            @focus="onInput = true"
            @blur="onInput = false"
          />
        </div>

        <div>
          <input
            type="password"
            id="confirmNewPassword"
            v-model="confirmNewPassword"
            placeholder="Confirm New Password"
            class="input-about"
            @focus="onInput = true"
            @blur="onInput = false"
          />
        </div>
      </form>
      <hr class="border-2 border-grid7 mx-auto my-20" />
      <div class="flex justify-end">
        <button
          class="hover:bg-secondary
                 bg-grid1 rounded-2xl font-bold
                 text-white px-9 py-2 text-lg">
          SAVE CHANGES
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      onInput: null
    }
  }
}
</script>
