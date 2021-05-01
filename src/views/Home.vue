<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <section class="relative">
      <img :src="image1" class="h-screen w-full object-cover">
      <div class="absolute top-0 bg-opacity-50 w-full h-full bg-black px-104px py-20 flex items-center">
        <div class="text-white w-3/5">
          <h3 class="text-3xl lg:text-42px leading-tight font-serif font-bold w-4/5 mb-7">Discover what makes us stand out!</h3>
          <p class="text-lg lg:text-2xl mb-16">
            IWC Wellness and Preventive Consultancy Inc.
            is a huge national network of dentists and oral care practitioners,
            joined together by a shared vision of providing the best,
            yet affordable dental care services to every Filipino.
            Through an exclusive access to a unified dental care system,
            our members are privileged to obtain solutions in matters
            pertaining to oral hygiene and dental care.
          </p>
          <button
            class="bg-grid1 rounded-2xl font-bold
                   text-white px-5 py-2 text-lg
                   hover:bg-secondary">
              LEARN MORE
            </button>
        </div>
      </div>
    </section>
    <section class="relative">
      <img :src="image2" class="h-screen w-full object-cover">
      <div  class="absolute top-0 bg-white bg-opacity-25 w-full h-full p-5 flex flex-row-reverse items-center">
        <div class="bg-grid3 w-full lg:w-7/12 p-10 lg:px-20 lg:py-16 rounded-2xl shadow-box1">
          <h3 class="text-3xl lg:text-42px text-primary leading-tight font-serif font-bold w-4/5">
            What Do We Offer?
          </h3>
          <hr class="border-2 border-secondary my-9 w-4/5">
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
    <section class="relative">
      <img :src="image3" class="h-screen w-full object-cover">
      <div  class="absolute top-0 bg-white bg-opacity-25 w-full h-full p-5 flex items-center">
        <div class="bg-grid3 w-full lg:w-7/12 p-10 lg:px-20 lg:py-16 rounded-2xl shadow-box1">
          <h3 class="text-3xl lg:text-42px text-primary leading-tight font-serif font-bold w-4/5">
            Promoting Oral Health Thru Solid Partnership
          </h3>
          <hr class="border-2 border-secondary my-9 w-4/5">
          <p class="text-lg lg:text-2xl text-grid2 font-serif font-bold mb-9">
            Are you a licensed dental care practitioner? Broaden your network today!
          </p>
          <p class="text-lg lg:text-2xl text-primary mb-9">
            Since its inception in 2016, IWC Wellness and Preventive Consultancy Inc.
            has been in the forefront of improving the standards of dental care in the Philippines.
            We are able to foster collaborative relationships with more than 400 dental clinics across the country.
          </p>
          <p class="text-lg lg:text-2xl text-primary mb-9">
            Today, we require more dentist participation in providing for a more accessible dental care to our growing membership portfolio.
            If you are a licensed dentist/ practitioner, we offer professional growth through captured membership and market expansion
            Join our exclusive network in keeping our members maintain a healthy smile.
          </p>
          <button
            class="bg-grid1 rounded-2xl font-bold
                   text-white px-5 py-2 text-lg
                   hover:bg-secondary">
            APPLY FOR ACCREDITATION
          </button>
        </div>
      </div>
    </section>
    <section class="relative">
      <img :src="image4" class="h-screen w-full object-cover">
      <div  class="absolute top-0 bg-white bg-opacity-25 w-full h-full p-5 flex flex-row-reverse items-center">
        <div class="bg-grid3 w-full lg:w-7/12 p-10 lg:px-20 lg:py-16 rounded-2xl shadow-box1">
          <h3 class="text-3xl lg:text-42px text-primary leading-tight font-serif font-bold w-4/5">
            Looking Ahead: You and Your Dental Plan
          </h3>
          <hr class="border-2 border-secondary my-9 w-4/5">
          <p class="text-lg lg:text-2xl text-grid2 font-serif font-bold mb-9">
            Our teeth deserve real treatment!
          </p>
          <p class="text-lg lg:text-2xl text-primary mb-9">
            It is important to detect and diagnose dental problems before they become painful and too costly to treat.
          </p>
          <p class="text-lg lg:text-2xl text-primary mb-9">
            In IWC Wellness and Preventive Consultancy Inc., our dentist is your oral expert.
            We offer flexible plans to help you deal with dental issues the right way. After all, the last thing we need today is a toothache.
          </p>
          <button
            class="bg-grid1 rounded-2xl font-bold
                   text-white px-5 py-2 text-lg
                   hover:bg-secondary">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/public/general/AppHeader'
import AppMenu from '@/components/public/general/AppMenu'
import AppFooter from '@/components/public/general/AppFooter'
import Image1 from '@/assets/images/home/image1.png'
import Image2 from '@/assets/images/home/image2.png'
import Image3 from '@/assets/images/home/image3.png'
import Image4 from '@/assets/images/home/image4.png'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMenu,
    AppFooter
  },
  data () {
    return {
      image1: Image1,
      image2: Image2,
      image3: Image3,
      image4: Image4
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
