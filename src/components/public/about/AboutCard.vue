<template>
  <div class="grid grid-cols-25 w-11/12 mx-auto mb-80">
    <div v-if="rightImg">
      <div class="bg-secondary col-span-1"></div>
      <div class="col-span-12 shadow-xl flex">
        <div class="w-4/5 ml-5 self-center">
          <h3 class="text-4xl font-bold mb-3 md:text-3xl sm:text-2xl">
            {{ title }}
          </h3>
          <p class="text-lg leading-9 md:text-base sm:text-sm">
            {{ message }}
          </p>
        </div>
      </div>
      <div class="col-span-12 w-full h-full">
        <img
          :src="image.source"
          :alt="image.alt"
          width="100%"
          height="100%"
          class="h-full object-cover"
        />
      </div>
    </div>
    <div v-else>
      <div class="col-span-12 w-full h-full">
        <img
          :src="image.source"
          :alt="image.alt"
          width="100%"
          height="100%"
          class="h-full object-cover"
        />
      </div>
      <div class="col-span-12 shadow-xl flex">
        <div class="w-4/5 ml-5 self-center">
          <h3 class="text-4xl font-bold mb-3 md:text-3xl sm:text-2xl">
            {{ title }}
          </h3>
          <p class="text-lg leading-9 md:text-base sm:text-sm">
            {{ message }}
          </p>
        </div>
      </div>
      <div class="bg-secondary col-span-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    leftImg: {
      type: Boolean,
      required: false
    },
    rightImg: {
      type: Boolean,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: Number,
      required: true
    }
  }
}
</script>
