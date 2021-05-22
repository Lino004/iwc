<template>
  <div>
    <div class="pb-20">
      <h3 class="font-bold text-primary font-serif text-center text-3xl md:text-3xl lg:text-42px">
        Inquiry Form
      </h3>
      <hr class="border-2 border-grid2 w-1/2 mt-6 mx-auto"/>
    </div>
    <form novalidate='true' @submit.prevent="$emit('is-submit')" class="grid grid-cols-2 gap-8 mb-10">
      <div class="form-group col-span-2 md:col-span-1">
        <input
          id="ContactPerson"
          type="text"
          placeholder="Contact Person"
          required
          class="input-contact"
        />
        <div class="line-b-input"></div>
      </div>

      <div class="form-group col-span-2 md:col-span-1">
        <input
          id="CompanyPosition"
          type="text"
          placeholder="Company Position"
          required
          class="input-contact"
        />
        <div class="line-b-input"></div>
      </div>

      <div class="form-group col-span-2 md:col-span-1">
        <input
          id="ContactEmail"
          type="email"
          placeholder="Contact Email"
          required
          class="input-contact"
        />
        <div class="line-b-input"></div>
      </div>

      <div class="form-group col-span-2 md:col-span-1">
        <input
          id="ContactNumber"
          type="text"
          placeholder="Contact Number"
          required
          class="input-contact"
        />
        <div class="line-b-input"></div>
      </div>

      <div class="form-group col-span-2">
        <input
          id="CompanyName"
          type="text"
          placeholder="Company Name"
          required
          class="input-contact"
        />
        <div class="line-b-input"></div>
      </div>

      <div class="form-group col-span-2 md:col-span-1">
        <input
          id="NatureofBusiness"
          type="text"
          placeholder="Nature of Business"
          required
          class="input-contact"
        />
        <div class="line-b-input"></div>
      </div>

      <div class="form-group col-span-2 md:col-span-1">
        <input
          id="EstimatedNumberofEnrollees"
          type="text"
          placeholder="Estimated Number of Enrollees"
          required
          class="input-contact"
        />
        <div class="line-b-input"></div>
      </div>

      <div class="form-group col-span-2">
        <input
          id="CompanyAddress"
          type="text"
          placeholder="Company Address"
          required
          class="input-contact"
        />
        <div class="line-b-input"></div>
      </div>

      <div class="form-group col-span-2">
        <textarea
          id="message"
          placeholder="Your Message"
          rows="5"
          required
          class="input-contact"
        ></textarea>
        <div class="line-b-input"></div>
      </div>

      <div class="col-span-2 text-center">
        <button type="submit" class="bg-grid1 rounded-15px font-sans font-bold text-white px-5 py-2 text-lg hover:bg-secondary">
          SUBMIT
        </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {

}
</script>
