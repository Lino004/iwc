<template>
  <div>
    <subtitle subtitle="DENTAL CLINIC"></subtitle>

    <div class="pt-16">
      <div class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 gap-10">
        <div class="rounded-15px shadow-box1 overflow-hidden cursor-pointer" @click="editClinic = true">
          <div class="text-center text-white bg-primary py-7">Happy Clinic</div>
          <div class="px-11 py-7 grid grid-cols-1 gap-y-5">
            <p><span class="font-bold">Address:</span> Happy Road 1234, Something, Something, Something</p>
            <p><span class="font-bold">Email:</span> happy@mail.com</p>
            <p><span class="font-bold">Contact Number:</span> 123-456-7890</p>
            <p><span class="font-bold">Schedule:</span> MON - FRI | 9AM - 5PM
            </p>
          </div>
        </div>

        <div class="rounded-15px shadow-box1 overflow-hidden flex justify-center items-center cursor-pointer" @click="addClinic = true">
          <div class="font-bold text-grid7 justify-center flex flex-col items-center gap-y-4">
            <icon-plus-gris></icon-plus-gris>
            <p>Add Dental Clinic</p>
          </div>
        </div>
      </div>
    </div>

    <modal v-if="addClinic" @close="addClinic = false" customClass='w-11/12 md:w-8/12 lg:w-1/2 xl:w-5/12'>
      <add-clinic></add-clinic>
    </modal>

    <modal v-if="editClinic" @close="editClinic = false" customClass='w-11/12 md:w-8/12 lg:w-1/2 xl:w-5/12'>
      <edit-clinic></edit-clinic>
    </modal>
  </div>
</template>

<script>
import IconPlusGris from '../icons/IconPlusGris.vue'
import Subtitle from '../reusables/Subtitle.vue'
import AddClinic from './AddClinic.vue'
import EditClinic from './EditClinic.vue'
export default {
  components: { Subtitle, IconPlusGris, AddClinic, EditClinic },
  data () {
    return {
      addClinic: false,
      editClinic: false
    }
  }
}
</script>
