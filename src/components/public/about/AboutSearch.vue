<template>
  <section class="w-full">
    <div class="px-10 py-16">
      <form action="" class="flex lg:flex-row flex-col w-full justify-around">
        <div class="input-search lg:w-1/3 md:w-3/4 md:mx-auto">
          <label for="search py-auto" class="font-bold text-primary lg:text-lg"
            >SEARCH</label
          >
          <br />
          <div class="flex items-center">
            <div class="h-65px bg-grid3 rounded-l-15px flex items-center px-4">
              <IconSearch
                class="mx-auto stroke-grid8"
                width="2rem"
                height="2rem"
              />
            </div>
            <input
              type="text"
              id="search"
              v-model="valueSearch"
              @keyup="actionkeyUp"
              @keydown="actionkeyDown"
              @keydown.enter.prevent="actionkeyEntre"
              class="input-about search-input rounded-l-none"
            />
          </div>
        </div>

        <!-- <div class="lg:w-1/4 md:w-3/4 md:mx-auto">
          <label for="regions" class="font-bold text-primary lg:text-lg">REGION</label> <br />
          <select
            name="regions"
            id="regions"
            class="input-about select-input border border-grid7"
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
        </div> -->

        <div class="lg:w-1/4 md:w-3/4 md:mx-auto">
          <label for="specializations" class="font-bold text-primary lg:text-lg"
            >SPECIALIZATION</label
          >
          <select
            name="specializations"
            id="specializations"
            class="input-about select-chevron"
            v-model="valueSpecialization"
            @change="$emit('event-specialization', valueSpecialization)"
          >
            <option value="">Specialization</option>
            <option
              v-for="(specialization, i) in specializations"
              :key="`specialization${i}`"
              :value="specialization.id"
            >
              {{ specialization.name }}
            </option>
          </select>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { getSpecializations } from '@/api/public/specializations'
// import { getRegions } from '@/api/public/regions'

export default {
  components: {},
  data () {
    return {
      specializations: [],
      // regions: [],
      valueSpecialization: '',
      // valueRegion: '',
      valueSearch: '',
      typingTimer: null,
      doneTypingInterval: 1000
    }
  },
  computed: {},
  methods: {
    async initData () {
      try {
        this.specializations = (await getSpecializations()).data.data
        // this.regions = (await getRegions()).data.data
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
    },
    actionkeyEntre () {
      clearTimeout(this.typingTimer)
      this.$emit('event-search', this.valueSearch)
    }
  },
  async mounted () {
    await this.initData()
  }
}
</script>
