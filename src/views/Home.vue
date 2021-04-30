<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <section class="relative">
      <img :src="image1" alt="">
      <div class="absolute top-0 bg-opacity-50 w-full h-full bg-black px-104px py-20 flex items-center">
        <div class="text-white w-2/5">
          <h3 class="text-42px leading-tight font-serif font-bold w-4/5 mb-7">Discover what makes us stand out!</h3>
          <p class="text-2xl font-bold mb-16">
            IWC Wellness and Preventive Consultancy Inc.
            is a huge national network of dentists and oral care practitioners,
            joined together by a shared vision of providing the best,
            yet affordable dental care services to every Filipino.
            Through an exclusive access to a unified dental care system,
            our members are privileged to obtain solutions in matters
            pertaining to oral hygiene and dental care.
          </p>
          <button
            class="bg-secondary rounded-2xl font-bold
                   text-white px-5 py-2 text-sm">
              LEARN MORE
            </button>
        </div>
      </div>
    </section>
    <section class="relative">
      <img :src="image2" alt="">
      <div  class="absolute top-0 bg-white bg-opacity-25 w-full h-full p-16 flex flex-row-reverse items-center">
        <div class="bg-grid3 w-7/12 px-20 py-16 rounded-2xl shadow-box1">
          <h3 class="text-42px leading-tight font-serif font-bold w-4/5">
            What Do We Offer?
          </h3>
          <hr class="border border-secondary my-9 w-4/5">
          <p class="text-2xl text-grid2 font-serif font-bold">
            Committed to improving the oral health status of our members, we are proud to offer:
          </p>
          <ul class="text-2xl my-9 text-primary">
            <li class="list-style-check font-bold">Versatile Oral Care Plans</li>
            <li class="list-style-check font-bold">Budget-friendly Cost of Service</li>
            <li class="list-style-check font-bold">Convenient and Accessible Dental Clinics</li>
            <li class="list-style-check font-bold">Huge Network of Oral Care Experts</li>
            <li class="list-style-check font-bold">Personalized Customer Service</li>
            <li class="list-style-check font-bold">No Hidden Benefit Restrictions</li>
            <li class="list-style-check font-bold">Nationwide Membership Portfolio</li>
            <li class="list-style-check font-bold">Technology in Place</li>
            <li class="list-style-check font-bold">Qualification and Experience</li>
          </ul>
          <button
            class="bg-grid1 rounded-2xl font-bold
                   text-white px-5 py-2 text-sm">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
    <section class="relative">
      <img :src="image3" alt="">
      <div  class="absolute top-0 bg-white bg-opacity-25 w-full h-full p-16 flex items-center">
        <div class="bg-grid3 w-7/12 px-20 py-16 rounded-2xl shadow-box1">
          <h3 class="text-4xl leading-tight font-serif font-bold w-4/5">
            Promoting Oral Health Thru Solid Partnership
          </h3>
          <hr class="border border-secondary my-9 w-4/5">
          <p class="text-lg text-grid2 font-serif font-bold">
            Are you a licensed dental care practitioner? Broaden your network today!
          </p>
          <p class="text-lg text-primary">
            Since its inception in 2016, IWC Wellness and Preventive Consultancy Inc.
            has been in the forefront of improving the standards of dental care in the Philippines.
            We are able to foster collaborative relationships with more than 400 dental clinics across the country.
          </p>
          <p class="text-lg text-primary">
            Today, we require more dentist participation in providing for a more accessible dental care to our growing membership portfolio.
            If you are a licensed dentist/ practitioner, we offer professional growth through captured membership and market expansion
            Join our exclusive network in keeping our members maintain a healthy smile.
          </p>
          <button
            class="bg-grid1 rounded-2xl font-bold
                   text-white px-5 py-2 text-sm">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/public/home/AppHeader'
import AppMenu from '@/components/public/home/AppMenu'
import Image1 from '@/assets/images/home/image1.png'
import Image2 from '@/assets/images/home/image2.png'
import Image3 from '@/assets/images/home/image3.png'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMenu
  },
  data () {
    return {
      image1: Image1,
      image2: Image2,
      image3: Image3
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
