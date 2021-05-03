<template>
  <section id="container" class="container py-20 sm:py-10 md:py-14 lg:py-16 xl:py-20 mx-auto ">

    <div class="row mx-auto">
      <div class="col col-1"></div>
      <div class="col col-5 flex shadow-xl">
        <div class="self-center ml-5">
          <h3 class="text-primary font-serif font-bold sm:text-2xl md:text-3xl lg:text-42px mb-3 lg:mb-5">
            Vision
          </h3>
          <p class="text-primary font-sans text-xs sm:text-sm md:text-base lg:text-xl leading-5 sm:leading-6 lg:leading-9">
            To be the preferred provider of carefully-packaged, affordable
            dental care plans fit for every Filipino’s exclusive needs and
            remove the barrier that seems to get in the way in their ability to
            maintain and show a happy, healthy smile.
          </p>
        </div>
      </div>
      <div class="col col-6">
        <img
          src="@/assets/images/about/cooperation.png"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
    </div>

    <div class="row mx-auto">
      <div class="col col-6">
        <img
          src="@/assets/images/about/mission woman.png"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="col col-5 flex shadow-xl">
        <div class="self-center ml-5">
          <h3 class="text-primary font-serif font-bold sm:text-2xl md:text-3xl lg:text-42px  mb-3 lg:mb-5">
            Mission
          </h3>
          <p class="text-primary font-sans text-xs sm:text-sm md:text-base lg:text-xl leading-5 sm:leading-6 lg:leading-9">
            IWC Wellness remains committed to providing the finest avenue where
            its clients can explore options for the best dental experience ,
            while giving its dental partners a strong boost their business
            deserves.
          </p>
        </div>
      </div>
      <div class="col col-1"></div>
    </div>

    <hr class="w-11/12 mx-auto my-10 border-2 border-grid2" />
  </section>
</template>

<script>
// import AboutCard from './AboutCard.vue'

export default {
  // components: { AboutCard },
  data () {}
}
</script>

<style lang="css" scoped>
#container {
  /* border: hotpink solid 2px; */
}

.row {
  display: -ms-flexbox;
  display: flex;
  /* -ms-flex-wrap: wrap;
  flex-wrap: wrap; */
  /* border: black 1px solid; */
  width: 90%;
  height: auto;
  margin-bottom: 100px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
}

.col-1 {
  -ms-flex: 0 0 2.333333%;
  flex: 0 0 2.333333%;
  max-width: 2.333333%;
  background-color: #C29C4A;
  /* border: blue 1px solid; */
}

.col-5 {
  -ms-flex: 0 0 47.666667%;
  flex: 0 0 47.666667%;
  max-width: 47.666667%;
  /* box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
  box-shadow: 0px 1px 1px 0px #B5B5B5;
  /* border: red 1px solid; */
}

.col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  /* border: green 1px solid; */
}
</style>
