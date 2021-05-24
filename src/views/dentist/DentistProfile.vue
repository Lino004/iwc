<template>
  <div>
    <dentist-info></dentist-info>
    <dental-clinic></dental-clinic>

    <hr class="border-2 border-grid7 mx-auto mb-20" />

    <div class="flex justify-end">
      <button class="hover:bg-secondary bg-grid1 rounded-2xl font-bold text-white px-9 py-2 text-lg">
        EDIT PROFILE
      </button>
    </div>
  </div>
</template>

<script>
import DentalClinic from '../../components/dentist/DentalClinic.vue'
import DentistInfo from '../../components/dentist/DentistInfo.vue'
export default {
  components: { DentistInfo, DentalClinic }

}
</script>
