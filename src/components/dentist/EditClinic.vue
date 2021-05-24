<template>
  <div>
    <h3 class="section-title">Edit Dental Clinic</h3>

    <form action="" class="grid grid-cols-2 grid-flow-row my-10 gap-y-8 gap-x-5">
      <input type="text" v-model="clinicName" value="clinicName" placeholder="Clinic Name" class="input-about col-span-2">
      <input type="text" v-model="address" placeholder="Address" class="input-about col-span-2">
      <select v-model="province" class="input-about select-chevron" id="province">
        <option value="">Province</option>
      </select>
      <input type="text" v-model="postalCode" placeholder="Postal Code" class="input-about">
      <input type="email" v-model="email" placeholder="Email" class="input-about col-span-2">
      <input type="number" v-model="phone" placeholder="Contact Number" class="input-about col-span-2">
      <input type="date" placeholder="Schedule" class="input-about">

      <router-link to="" class="col-span-2">
        <button class="bg-grid1 hover:bg-secondary text-white rounded-15px py-3 w-full font-bold">
          EDIT
         </button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clinicName: 'Happy Clinic',
      address: '',
      province: '',
      postalCode: '',
      email: '',
      phone: '',
      schedule: ''
    }
  }
}
</script>
