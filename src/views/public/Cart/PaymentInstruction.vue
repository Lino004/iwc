<template>
  <section class="py-20 w-11/12 lg:w-8/12 mx-auto">
    <div>
      <h3 class="section-title">Payment Instructions</h3>
      <hr class="border-3 border-grid7 my-7 mx-auto" />
    </div>

    <div class="text-center w-11/12 md:w-3/4 lg:w-4/6 mx-auto">
      <div>
        <icon-check class="mx-auto mb-8 mt-16"></icon-check>
        <p class="leading-9 text-primary font-sans text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button
          class="bg-grid1 hover:bg-secondary text-white px-9 py-3 rounded-15px ml-auto my-11 font-bold"
        >
          <router-link to="">
            CONTINUE
          </router-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck.vue'
export default { components: { IconCheck } }
</script>
