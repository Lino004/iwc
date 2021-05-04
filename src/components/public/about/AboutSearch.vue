<template>
  <section class="w-full">
    <div class="px-10 py-16">
      <form action="" class="flex lg:flex-row flex-col w-full justify-around">
        <div class="input-search lg:w-1/3 md:w-3/4 md:mx-auto">
          <label for="search py-auto" class="font-bold text-primary lg:text-lg"
            >SEARCH</label
          >
          <br />
          <i class="icon">
            <!-- <img src="@/assets/images/about/search.png" alt="searc icon" /> -->
            <icon-search></icon-search>
          </i>
          <input
            type="text"
            name=""
            id="search"
            class="search-input bg-grid3 my-5 w-full h-14 text-primary font-sans lg:text-lg"
          />
        </div>

        <div class="lg:w-1/4 md:w-3/4 md:mx-auto">
          <label for="regions" class="font-bold text-primary lg:text-lg"
            >REGION</label
          >
          <br />
          <div class="select">
            <!-- <i class="icon">
              <img src="@/assets/images/about/search.png" alt="searc icon" />
              <icon-chevon></icon-chevon>
            </i> -->
            <select
              name="regions"
              id="regions"
              class="w-full h-14 my-5 pl-5 pr-5 select-input text-primary font-sans lg:text-lg"
            >
              <option value="">Region name</option>
              <option value="region1">R1</option>
              <option value="region2">R2</option>
              <option value="region3">R3</option>
              <option value="region4">R4</option>
            </select>
          </div>
        </div>

        <div class="lg:w-1/4 md:w-3/4 md:mx-auto">
          <label for="provinces" class="font-bold text-primary lg:text-lg"
            >PROVINCE</label
          >
          <div class="select">
            <select
              name="provinces"
              id="provinces"
              class="w-full h-14 my-5 px-5 select-input text-primary font-sans lg:text-lg"
            >
              <option value="">Province</option>
              <option value="province1">P1</option>
              <option value="province2">P2</option>
              <option value="province3">P3</option>
              <option value="province4">P4</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import IconChevon from '../../icons/IconChevon.vue'
import IconSearch from '../../icons/IconSearch.vue'
// eslint-disable-next-line vue/no-unused-components
export default { components: { IconSearch, IconChevon } }
</script>

<style lang="css" scoped>
.input-search i,
.select i {
  position: absolute;
}
.input-search .icon {
  padding: 36px 15px;
  min-width: 40px;
}
.select .icon {
  /* padding: 36px 15px; */
  right: 0;
  top: 50px;
  min-width: 40px;
}
.search-input {
  border-radius: 10px;
  border-style: none;
  border-width: 1px;
  padding-left: 60px;
  height: 65px;
  /* margin: 10px; */
  /* width: 25%; */
}
.search-input:hover,
.search-input:focus,
.select-input:hover,
.select-input:focus {
  /* padding: 12px 0; */
  outline: 0;
  /* border: 1px solid; */
  /* border-bottom: 1px solid #575756; */
  /* border-radius: 25px; */
  /* background-position: 100% center; */
}

select {

  /* styling */
  background-color: white;
  display: inline-block;
  font: inherit;

  /* reset */

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select-input {
  border-radius: 10px;
  border: 1px solid #c4c8cd;
  height: 65px;
  background-image: url('../../../assets/images/about/chevron.svg');
  background-position: calc(100% - 30px) calc(1em + 10px);
  background-repeat: no-repeat;
}
</style>
