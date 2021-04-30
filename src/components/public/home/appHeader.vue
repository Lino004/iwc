<template>
  <div>
    <div class="h-header bg-primary px-104px">
      <div class="flex flex-col justify-center h-full">
        <div class="flex w-full justify-between items-center">
          <div class=" pl-104">
            <img src="@/assets/images/logo.svg" alt="">
          </div>
          <div class="flex space-x-24">
            <div class="flex text-grid4 items-center">
              <div class="text-lg mr-4">
                <p class="text-right">
                  Email <br>
                  <span class="font-bold">contact@mail.com</span>
                </p>
              </div>
              <div class="h-20 w-20 bg-grid1 rounded-full flex items-center">
                <IconEmail
                  class="mx-auto"
                  width="2.438rem"
                  height="1.938rem"/>
              </div>
            </div>
            <div class="flex text-grid4 items-center">
              <div class="text-lg mr-4">
                <p class="text-right">
                  Phone <br>
                  <span class="font-bold">123-456-7890</span>
                </p>
              </div>
              <div class="h-20 w-20 bg-grid1 rounded-full flex items-center">
                <IconPhone
                  class="mx-auto"
                  width="2.188rem"
                  height="2.188rem"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
