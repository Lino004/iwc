<template>
  <div>
    <subtitle subtitle="DENTAL CLINIC INFORMATION"></subtitle>
    <div class="py-16">
      <form class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-20 gap-y-5">
        <input
          type="text"
          id="DentalClinicName"
          placeholder="Dental Clinic Name"
          class="col-span-2 md:col-span-1 input-about"
        />

        <div class="hidden md:block"></div>

        <input
          type="text"
          id="DentalClinicAddress"
          placeholder="Dental Clinic Address"
          class="input-about col-span-2"
        />

        <select
          id="DentalClinicProvince"
          class="col-span-2 md:col-span-1 input-about select-chevron">
          <option value="">Dental Clinic Province</option>
        </select>

        <input
          type="text"
          id="PostalCode"
          placeholder="Postal Code"
          class="col-span-2 md:col-span-1 input-about"
        />

        <input
          type="date"
          id="Schedule"
          placeholder="Schedule"
          class="input-about"
        />

        <div
          class="col-span-2 flex items-center justify-center h-48 shadow-box1 rounded-2xl cursor-pointer"
          @click="$refs.fileImageClinic.click()">
          <input
            type="file"
            accept="image/*"
            ref="fileImageClinic"
            class="hidden">
          <div class="text-center w-80">
            <p class="text-lg">UPLOAD CLINIC IMAGE</p>
            <p class="text-base">This is only for verification purposes and will not be shared to third-party members.</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
