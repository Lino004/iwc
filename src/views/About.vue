<template>
  <div class="w-full mx-auto">
    <section class="h-auto relative">
      <img
        class="filter brightness-50"
        src="../assets/img/network.png"
        alt=""
        height="100%"
        width="100%"
      />
      <div class="absolute top-0 w-full h-full flex items-center">
        <h1
          class="text-white font-bold text-2xl pl-10 sm:text-3xl sm:pl-5 md:pl-11 md:text-4xl lg:pl-12 lg:text-5xl xl:text-6xl xl:pl-13"
        >
          About Us
        </h1>
      </div>
    </section>

    <section id="bg2" class="lg:container py-24 mx-auto">
      <div>
        <div class="w-auto relative">
          <h3
            id="company"
            class="font-bold text-primary text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl"
          >
            Company Profile
          </h3>
          <hr
            class="w-1/2 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 mt-6 mx-auto border-solid border-2 border-gray-700"
          />
        </div>

        <div class="md:w-4/5 lg:w-1/2 w-4/5 text-left mx-auto mt-40 leading-9">
          <p class="text-body1 mb-12">
            IWC Wellness and Preventive Consultancy Inc ., was established in
            2016 with a commitment to provide and deliver the best oral care
            every Filipino deserves. It was created to provide a link to various
            dental professionals and an easy access to affordable dental health
            plans fit for everyone’s unique needs.
          </p>
          <p class="text-body1 mb-12">
            The company is managed by a group of dedicated professionals and
            powered by an upright system that makes the link between its members
            and partners fast and easy, making every client-dentist transaction
            exceptionally convenient.
          </p>
          <p class="text-body1 mb-12">
            The idea of having someone handle the marketing aspects of dental
            services was taking off in the dental industry. Dentists wanted to
            focus on patients and not on everyday aspects of promoting their
            business. IWC Wellness took it as a cue and since then, has
            partnered with various dental professionals all over the country to
            establish a national dental network.
          </p>
        </div>
      </div>
      <hr class="w-11/12 mt-24 mx-auto border-solid border-2 border-gray-700" />
    </section>

    <section class="container py-20 mx-auto">
      <div class="grid grid-cols-25 w-11/12 mx-auto mb-80">
        <div class="bg-yellow col-span-1"></div>
        <div class="col-span-12 shadow-xl flex">
          <div class="w-4/5 ml-5 self-center">
            <h3 class="text-h3 font-bold mb-3">Vision</h3>
            <p class="text-body1 leading-9">
              To be the preferred provider of carefully-packaged, affordable
              dental care plans fit for every Filipino’s exclusive needs and
              remove the barrier that seems to get in the way in their ability
              to maintain and show a happy, healthy smile.
            </p>
          </div>
        </div>
        <div class="col-span-12 w-full h-full">
          <img
            src="../assets/img/cooperation.png"
            width="auto"
            height="auto"
            alt=""
          />
        </div>
      </div>

      <div class="grid grid-cols-25 w-11/12 mx-auto mb-40">
        <div class="col-span-12">
          <img src="../assets/img/mission woman.png" alt="" />
        </div>
        <div class="col-span-12 shadow-xl flex">
          <div class="w-4/5 ml-5 self-center">
            <h3 class="text-h3 font-bold mb-3">Mission</h3>
            <p class="text-body1 leading-9">
              IWC Wellness remains committed to providing the finest avenue
              where its clients can explore options for the best dental
              experience , while giving its dental partners a strong boost their
              business deserves.
            </p>
          </div>
        </div>
        <div class="bg-yellow col-span-1"></div>
      </div>
      <hr class="w-11/12  mx-auto border-solid border-2 border-gray-700" />
    </section>

    <section class="container pb-20 mx-auto">
      <div class="my-10">
        <h1
          class="font-bold text-primary text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl"
        >
          The board of Directors
        </h1>
        <hr
          class="w-1/2 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 mt-6 mx-auto border-solid border-2 border-gray-700"
        />
      </div>
      <div class="w-1/2 mx-auto md:w-4/5 lg:w-3/5 xl:w-1/2 w-4/5 text-left">
        <p class="text-body1 leading-9">
          IWC Wellness and Preventive Consultancy Inc ., was established in 2016
          with a commitment to provide and deliver the best oral care every
          Filipino deserves. It was created to provide a link to various dental
          professionals and an easy access to affordable dental health plans fit
        </p>
      </div>
      <div
        class="flex w-3/5 md:w-4/5 lg:w-11/12 sm:w-11/12 xl:w-3/5 flex-wrap-reverse items-center justify-center mx-auto gap-x-28 gap-y-14 my-10"
      >
        <div v-for="item in team" :key="item.name">
          <img :src="item.src" :alt="item.name" />
          <p class="text-center text-body1 leading-9 mt-4">{{ item.name }}</p>
        </div>
      </div>
    </section>

    <section class="container pb-20 mx-auto">
      <div class="my-10">
        <h1
          class="font-bold text-primary text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl"
        >
          The Management
        </h1>
        <hr
          class="w-1/2 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3 mt-6 mx-auto border-solid border-2 border-gray-700"
        />
      </div>
      <div class="w-1/2 mx-auto md:w-4/5 lg:w-3/5 xl:w-1/2 w-4/5 text-left">
        <p class="text-body1 leading-9">
          IWC Wellness and Preventive Consultancy Inc ., was established in 2016
          with a commitment to provide and deliver the best oral care every
          Filipino deserves. It was created to provide a link to various dental
          professionals and an easy access to affordable dental health plans fit
        </p>
      </div>
      <div
        class="flex w-3/5 md:w-4/5 lg:w-11/12 xl:w-3/5 sm:w-11/12 flex-wrap-reverse items-center justify-center mx-auto gap-x-28 gap-y-14 my-10"
      >
        <div v-for="item in management" :key="item.name">
          <img :src="item.src" :alt="item.name" />
          <p class="text-center text-body1 leading-9 mt-4">{{ item.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import boyet from '../assets/img/boyet.png'
import sam from '../assets/img/Sam-Heughan.png'

export default {
  data: () => {
    return {
      team: [
        { src: boyet, name: 'Boyet Fernandez', id: 1 },
        { src: boyet, name: 'Boyet Fernandez', id: 2 },
        { src: boyet, name: 'Boyet Fernandez', id: 3 },
        { src: boyet, name: 'Boyet Fernandez', id: 4 },
        { src: boyet, name: 'Boyet Fernandez', id: 5 },
        { src: boyet, name: 'Boyet Fernandez', id: 6 },
        { src: boyet, name: 'Boyet Fernandez', id: 7 }
      ],
      management: [
        { src: sam, name: 'Boyet Fernandez', id: 1 },
        { src: sam, name: 'Boyet Fernandez', id: 2 },
        { src: sam, name: 'Boyet Fernandez', id: 3 }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
#bg2 {
  background: url("../assets/img/LikeAToothInTheNight.png") no-repeat;
  background-position: 20px 172px;
}
</style>
