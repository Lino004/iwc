<template>
  <section class="mx-auto container">
    <div class="w-4/5 mx-auto">
      <div class="w-full h-5 bg-primary"></div>
      <div class="shadow-box1">
        <div class="py-20">
          <h3
            class="font-bold text-primary font-serif text-center text-2xl sm:text-3xl md:text-3xl lg:text-42px"
          >
            Contact Form
          </h3>
          <hr
            class="w-1/2 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 mt-6 mx-auto border-2 border-grid2"
          />
        </div>

        <div>
          <div class="grid lg:grid-cols-2">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Contact email" />
            </div>
          </div>

          <div class="grid lg:grid-col-1">
            <input type="text" placeholder="Subject" />
          </div>

          <div class="grid lg:grid-col-1">
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
