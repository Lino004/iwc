<template>
  <div class="w-4/5 lg:w-3/5 mx-4 md:mx-auto bg-white rounded-2xl px-10 lg:px-14 relative text-primary my-20 min-h-screen">
    <a
      class="absolute top-5 lg:top-10 right-5 lg:right-10 cursor-pointer"
      @click="$emit('close')"
    >
      <i class="mdi mdi-close text-2xl"></i>
    </a>

    <h3 class="font-bold text-primary font-serif text-2xl md:text-3xl lg:text-42px pt-14 pl-10 mb-11">
      Pinoy Dental Pack
    </h3>

    <div class="text-primary font-bold border-t-3 border-b-3 border-grid7 py-6 pl-10">
      APPLICANT DETAILS
    </div>

    <form class="grid grid-cols-2 gap-6 my-8">
      <div class="col-span-2">
        <input
          type="text"
          id="fullName"
          v-model="fullName"
          placeholder="Full Name"
          class="input-about"
        />
      </div>

      <div class="col-span-2 md:col-span-1">
        <input
          type="date"
          id="birthday"
          v-model="birthday"
          placeholder="Birthday"
          class="input-about"
        />
      </div>

      <div class="col-span-2 md:col-span-1">
        <input
          type="text"
          id="companyName"
          v-model="companyName"
          placeholder="Company Name (if applicable)"
          class="input-about"
        />
      </div>

      <div class="col-span-2">
        <input
          type="text"
          id="address1"
          v-model="address1"
          placeholder="Address 1"
          class="input-about"
        />
      </div>

      <div class="col-span-2">
        <input
          type="text"
          id="address2"
          v-model="address2"
          placeholder="Address 2"
          class="input-about"
        />
      </div>

     <div class="col-span-2 md:col-span-1">
        <select name="district" id="district" class="input-about select-chevron" v-model="district">
          <option value="">District/Barangay</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

       <div class="col-span-2 md:col-span-1">
        <select name="city" id="city" class="input-about select-chevron" v-model="city">
          <option value="">City</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div class="col-span-2 md:col-span-1">
        <select name="province" id="province" class="input-about select-chevron" v-model="province">
          <option value="">Province</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div class="col-span-2 md:col-span-1">
        <input
          type="text"
          id="codePostal"
          v-model="codePostal"
          placeholder="Postal Code"
          class="input-about"
        />
      </div>

      <div class="col-span-2 md:col-span-1">
        <input
          type="text"
          id="phone"
          v-model="phone"
          placeholder="Phone Number"
          class="input-about"
        />
      </div>
      <div class="col-span-2 md:col-span-1">
        <input
          type="text"
          id="referral"
          v-model="referral"
          placeholder="Referral (if applicable)"
          class="input-about"
        />
      </div>

      <div class="col-span-2 text-center mt-8">
        <button class="bg-grid1 hover:bg-secondary text-white px-9 py-3 rounded-15px mx-auto">
          <router-link to='/cart'>
            EDIT
          </router-link>
        </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullName: '',
      companyName: '',
      birthday: '',
      address1: '',
      address2: '',
      district: '',
      city: '',
      province: '',
      phone: '',
      codePostal: '',
      referral: ''
    }
  }
}
</script>
