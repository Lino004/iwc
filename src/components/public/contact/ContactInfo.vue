<template>
  <section class="container mx-auto py-16">
    <div>
      <h3
        class="font-bold text-primary font-serif text-center text-2xl sm:text-3xl md:text-3xl lg:text-42px"
      >
        Contact Us
      </h3>
      <hr
        class="w-1/2 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 mt-6 mx-auto border-2 border-grid2"
      />
    </div>

    <div class="w-4/5 py-20 mx-auto">
      <div class="grid lg:grid-cols-2">
        <div class="">
          <img src="@/assets/images/contact/GoogleMapTA.png" alt="" class="" />
        </div>

        <div class="flex flex-col justify-around pl-7">
          <div class="flex flex-row justify-start items-center my-10 lg:my-0">
            <div class="w-20 pr-20">
              <icon-map class="mx-auto"></icon-map>
            </div>
            <div class="text-primary text-sm sm:text-base md:text-lg lg:text-lg">
              <p>Upper Penthouse, Burgundy Corporate Center, Gil Puyat Avenue, Makati City </p>
            </div>
          </div>

          <div class="flex flex-row justify-start items-center mb-10 lg:mb-0">
            <div class="w-20 pr-20">
              <icon-mail class="mx-auto"></icon-mail>
            </div>
            <div class="text-primary text-sm sm:text-base md:text-lg lg:text-lg">
              <p>contact@mail.com</p>
            </div>
          </div>

          <div class="flex flex-row justify-start items-center mb-10 lg:mb-0">
            <div class="w-20 pr-20">
              <icon-tel class="mx-auto"></icon-tel>
            </div>
            <div class="text-primary text-sm sm:text-base md:text-lg lg:text-lg">
              <p>(02) 8994-0973</p>
              <p>(02) 8994-0408</p>
            </div>
          </div>

          <div class="flex flex-row justify-start items-center">
            <div class="w-20 pr-20">
              <icon-mobile class="mx-auto"></icon-mobile>
            </div>
            <div class="text-primary text-sm sm:text-base md:text-lg lg:text-lg">
              <p>0917-8269156 (Globe)</p>
              <p>0908-8913655 (Smart)</p>
              <p>0933-8792346 (Sun)</p>
            </div>
          </div>

          <div class="flex flex-row justify-start items-center mt-10 lg:mt-0">
            <div class="w-20 pr-20">
              <icon-facebook class="mx-auto"></icon-facebook>
            </div>
            <div class="text-secondary underline text-sm sm:text-base md:text-lg lg:text-lg">
              <p>IWC Wellness and Preventive Consultancy Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconFacebook from '../../icons/IconFacebook.vue'
import IconMail from '../../icons/IconMail.vue'
import IconMap from '../../icons/IconMap.vue'
import IconMobile from '../../icons/IconMobile.vue'
import IconTel from '../../icons/IconTel.vue'
// eslint-disable-next-line vue/no-unused-components
export default { components: { IconMap, IconMail, IconMobile, IconFacebook, IconTel } }
</script>

<style lang="css" scoped></style>
