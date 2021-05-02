<template>
  <section class="relative bg-imageTwo lg:h-screen">
    <div  class="top-0 bg-white bg-opacity-25 w-full h-full p-5 flex flex-row-reverse items-center px-8 lg:pr-104px">
      <div class="bg-grid3 w-full lg:w-7/12 p-10 lg:px-20 lg:py-16 rounded-2xl shadow-box1">
        <h3 class="text-3xl lg:text-42px text-primary leading-tight font-serif font-bold  w-5/6 lg:w-4/5">
          What Do We Offer?
        </h3>
        <hr class="border-2 border-secondary my-9  w-5/6 lg:w-4/5">
        <p class="text-lg lg:text-2xl text-grid2 font-serif font-bold">
          Committed to improving the oral health status of our members, we are proud to offer:
        </p>
        <ul class="text-lg lg:text-2xl my-9 text-primary">
          <li class="list-style-check">Versatile Oral Care Plans</li>
          <li class="list-style-check">Budget-friendly Cost of Service</li>
          <li class="list-style-check">Convenient and Accessible Dental Clinics</li>
          <li class="list-style-check">Huge Network of Oral Care Experts</li>
          <li class="list-style-check">Personalized Customer Service</li>
          <li class="list-style-check">No Hidden Benefit Restrictions</li>
          <li class="list-style-check">Nationwide Membership Portfolio</li>
          <li class="list-style-check">Technology in Place</li>
          <li class="list-style-check">Qualification and Experience</li>
        </ul>
        <button
          class="bg-grid1 rounded-2xl font-bold
                  text-white px-5 py-2 text-lg
                  hover:bg-secondary">
          LEARN MORE
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Image2 from '@/assets/images/home/image2.png'

export default {
  data () {
    return {
      image2: Image2
    }
  }
}
</script>

<style>
.list-style-check::before {
  content: "✓";
  margin-right: 10px;
}
</style>
