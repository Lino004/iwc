<template>
  <section class="w-full">
    <div class="px-10 py-16">
      <form action="" class="flex lg:flex-row flex-col w-full justify-around">

        <div class="input-search lg:w-1/3 md:w-3/4 md:mx-auto">
          <label for="search py-auto" class="font-bold text-primary lg:text-lg">SEARCH</label> <br />
          <input
            type="text"
            name=""
            id="search"
            class="w-full my-5 pl-16 px-5 h-65px appearance-none rounded-15px border-none bg-grid3 focus:outline-0 hover:outline-0 text-primary font-sans sm:text-lg search-input"
          />
        </div>

        <div class="lg:w-1/4 md:w-3/4 md:mx-auto">
          <label for="regions" class="font-bold text-primary lg:text-lg">REGION</label> <br />
          <select
            name="regions"
            id="regions"
            class="w-full my-5 px-5 h-65px appearance-none rounded-15px border border-grid7 focus:outline-0 hover:outline-0 text-primary font-sans sm:text-lg select-input"
          >
            <option value="">Region name</option>
            <option value="region1">R1</option>
            <option value="region2">R2</option>
            <option value="region3">R3</option>
            <option value="region4">R4</option>
          </select>
        </div>

        <div class="lg:w-1/4 md:w-3/4 md:mx-auto">
          <label for="provinces" class="font-bold text-primary lg:text-lg">PROVINCE</label>
            <select
              name="provinces"
              id="provinces"
              class="w-full my-5 px-5 h-65px appearance-none rounded-15px border border-grid7 focus:outline-0 hover:outline-0 text-primary font-sans sm:text-lg select-input"
            >
              <option value="">Province</option>
              <option value="province1">P1</option>
              <option value="province2">P2</option>
              <option value="province3">P3</option>
              <option value="province4">P4</option>
            </select>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default { components: { } }
</script>

<style lang="css" scoped>
.search-input {
  background-image: url("../../../assets/images/about/search-icon.png");
  background-position: calc(1em - 5px) calc(1em);
  background-repeat: no-repeat;
}
.select-input {
  background-image: url("../../../assets/images/about/chevron.svg");
  background-position: calc(100% - 30px) calc(1em + 10px);
  background-repeat: no-repeat;
}
</style>
