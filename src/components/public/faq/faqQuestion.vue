<template>
  <div class="w-full shadow-box1 rounded-15px">
    <div v-if="showSection === false" class="">
      <button
        type="button"
        v-on:click="toggle"
        class="py-10 pl-20 w-full text-left text-primary font-serif font-bold text-2xl flex justify-between"
      >
        {{ question }}
        <div class="pr-14">
          <icon-plus width="1.5rem" height="1.5rem" class="" />
        </div>
      </button>
    </div>

    <div v-else>
      <button
        type="button"
        v-on:click="toggle"
        class="bg-primary py-10 pl-20 w-full text-left text-white font-serif font-bold text-2xl rounded-t-15px flex justify-between"
      >
        {{ question }}
        <div class="pr-14 pt-2">
          <icon-moins width="1.3rem" height="1.3rem" class="" />
        </div>
      </button>
      <div></div>
    </div>

    <div v-show="showSection" class="px-10 md:px-36 py-14 w-full ">
      <p class="text-primary font-sans text-lg">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import IconMoins from '../../icons/IconMoins.vue'
import IconPlus from '../../icons/IconPlus.vue'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { IconPlus, IconMoins },
  methods: {
    toggle () {
      this.showSection = !this.showSection
    }
  },
  data () {
    return {
      showSection: false
    }
  },
  props: {
    question: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
