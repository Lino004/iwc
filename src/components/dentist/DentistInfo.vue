<template>
  <div>
    <subtitle subtitle="DENTIST INFORMATION"></subtitle>
    <div class="py-16">
      <div class="grid grid-cols-1 md:grid-rows-3 md:grid-flow-col gap-10">
        <p><span class="font-bold">Name:</span> Boyet Fernandez</p>
        <p><span class="font-bold">Email:</span> boyet.fernandez@gmail.com</p>
        <p><span class="font-bold">Address:</span> Happy Road 1234</p>
        <p><span class="font-bold">Contact Number:</span> 123-456-7890</p>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle from '../reusables/Subtitle.vue'
export default {
  components: { Subtitle }

}
</script>
