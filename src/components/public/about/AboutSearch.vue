<template>
  <section class="w-full">
    <div class="px-10 py-16">
      <form action="" class="flex lg:flex-row flex-col w-full justify-around">

        <div class="input-search lg:w-1/3 md:w-3/4 md:mx-auto">
          <label for="search py-auto" class="font-bold text-primary lg:text-lg">SEARCH</label> <br />
          <input
            type="text"
            id="search"
            v-model="valueSearch"
            @keyup="actionkeyUp"
            @keydown="actionkeyDown"
            class="w-full my-5 pl-16 px-5 h-65px appearance-none rounded-15px border-none bg-grid3 focus:outline-0 hover:outline-0 text-primary font-sans sm:text-lg search-input"
          />
        </div>

        <div class="lg:w-1/4 md:w-3/4 md:mx-auto">
          <label for="regions" class="font-bold text-primary lg:text-lg">REGION</label> <br />
          <select
            name="regions"
            id="regions"
            class="w-full my-5 px-5 h-65px appearance-none rounded-15px border border-grid7 focus:outline-0 hover:outline-0 text-primary font-sans sm:text-lg select-input"
            v-model="valueRegion"
            @change="$emit('event-region', valueRegion)"
          >
            <option value="">Region name</option>
            <option
              v-for="(region, i) in regions"
              :key="`region${i}`"
              :value="region.code">
              {{region.name}}
            </option>
          </select>
        </div>

        <div class="lg:w-1/4 md:w-3/4 md:mx-auto">
          <label for="provinces" class="font-bold text-primary lg:text-lg">PROVINCE</label>
            <select
              name="provinces"
              id="provinces"
              class="w-full my-5 px-5 h-65px appearance-none rounded-15px border border-grid7 focus:outline-0 hover:outline-0 text-primary font-sans sm:text-lg select-input"
              v-model="valueProvince"
              @change="$emit('event-province', valueProvince)"
            >
              <option value="">Province</option>
              <option
                v-for="(province, i) in provinces"
                :key="`province${i}`"
                :value="province.code">
                {{province.name}}
              </option>
            </select>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { getProvinces } from '@/api/public/provinces'
import { getRegions } from '@/api/public/regions'

export default {
  components: {
  },
  data () {
    return {
      provinces: [],
      regions: [],
      valueProvince: '',
      valueRegion: '',
      valueSearch: '',
      typingTimer: null,
      doneTypingInterval: 2000
    }
  },
  computed: {},
  methods: {
    async initData () {
      try {
        this.provinces = (await getProvinces()).data.data
        this.regions = (await getRegions()).data.data
      } catch (error) {
        //
      }
    },
    actionkeyUp () {
      clearTimeout(this.typingTimer)
      const that = this
      this.typingTimer = setTimeout(() => {
        that.$emit('event-search', that.valueSearch)
      }, this.doneTypingInterval)
    },
    actionkeyDown () {
      clearTimeout(this.typingTimer)
    }
  },
  async mounted () {
    await this.initData()
  }
}
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
