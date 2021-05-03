<template>
  <section class="w-full">
    <div class="px-10 py-16">
      <form action="" class="flex flex-row w-full justify-around">
        <div class="input-search w-1/3">
          <label for="search py-auto" class="font-bold">SEARCH</label> <br />
          <i class="icon">
            <img src="@/assets/images/about/search.png" alt="" />
          </i>
          <input
            type="text"
            name=""
            id="search"
            class="search-input bg-grid3 border-grid6 my-5 w-full h-14"
          />
        </div>

        <div class="w-1/4">
          <label for="regions" class="font-bold">REGION</label> <br />
          <div class="select">
            <select name="regions" id="regions" class="w-full h-14 my-5 pl-5 pr-5 select-input">
              <option value="">Region name</option>
              <option value="region1">R1</option>
              <option value="region2">R2</option>
              <option value="region3">R3</option>
              <option value="region4">R4</option>
            </select>
          </div>
        </div>

        <div class="w-1/4">
          <label for="provinces" class="font-bold">PROVINCE</label>
          <div class="select">
            <select name="provinces" id="provinces" class="w-full h-14 my-5 px-5 select-input">
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
export default {}
</script>

<style lang="css" scoped>
.input-search i {
  position: absolute;
}
.icon {
  padding: 36px 15px;
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
.search-input:focus {
  /* padding: 12px 0; */
  outline: 0;
  /* border: 1px solid; */
  /* border-bottom: 1px solid #575756; */
  /* border-radius: 25px; */
  /* background-position: 100% center; */
}

.select {
  display: block;

}

.select-input {
  border-radius: 10px;
  border: 1px solid black;
  height: 65px;
}
.select-input:hover,
.select-input:focus {
  /* padding: 12px 0; */
  outline: 0;
  /* border: 1px solid; */
  /* border-bottom: 1px solid #575756; */
  /* border-radius: 25px; */
  /* background-position: 100% center; */
}
</style>
