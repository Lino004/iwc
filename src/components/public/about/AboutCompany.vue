<template>
  <section>
    <div>
      <h3 class="font-bold text-primary font-serif text-center text-2xl md:text-3xl lg:text-42px">
        Company Profile
      </h3>
      <hr class="w-1/2 md:w-2/5 mt-6 mx-auto border-2 border-grid2"/>
    </div>
    <div class="relative">
      <img
        src="@/assets/images/about/LikeTooth.png"
        alt=""
        class=""
      />
      <div
        class="absolute absolute-center w-4/5 lg:w-3/5 text-left mx-auto leading-9 text-primary py-10 lg:py-24"
      >
        <p class="text-lg mb-12 font-sans">
          IWC Wellness and Preventive Consultancy Inc ., was established in
          2016 with a commitment to provide and deliver the best oral care
          every Filipino deserves. It was created to provide a link to various
          dental professionals and an easy access to affordable dental health
          plans fit for everyone’s unique needs.
        </p>
        <p class="text-lg mb-12 font-sans">
          The company is managed by a group of dedicated professionals and
          powered by an upright system that makes the link between its members
          and partners fast and easy, making every client-dentist transaction
          exceptionally convenient.
        </p>
        <p class="text-lg mb-12 font-sans">
          The idea of having someone handle the marketing aspects of dental
          services was taking off in the dental industry. Dentists wanted to
          focus on patients and not on everyday aspects of promoting their
          business. IWC Wellness took it as a cue and since then, has
          partnered with various dental professionals all over the country to
          establish a national dental network.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.absolute-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
</style>
