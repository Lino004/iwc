<template>
  <div class="grid grid-cols-2 gap-8">
    <div class="bg-white shadow-box1 rounded-2xl p-5">
      <h5 class="text-lg font-bold mb-4">ORDER STATISTICS</h5>
      <div class="">
        <ChartLine
          :chart-data="datacollection"
          :options="options"/>
      </div>
    </div>
    <div class="bg-white shadow-box1 rounded-2xl p-5">
      <h5 class="text-lg font-bold mb-4">CLIENT STATISTICS</h5>
      <div class="">
        <ChartLine
          :chart-data="datacollection"
          :options="options"/>
      </div>
    </div>
    <div class="bg-white shadow-box1 rounded-2xl p-5">
      <h5 class="text-lg font-bold mb-4">PRODUCT SUMMARY</h5>
      <div class="text-primary text-lg flex space-x-4" v-for="n in 6" :key="n">
        <div class="flex-1">Boyet <span class="text-secondary">purchased</span> Product Name</div>
        <div class="text-grid7">1 day ago</div>
      </div>
    </div>
    <div class="bg-white shadow-box1 rounded-2xl p-5">
      <h5 class="text-lg font-bold mb-4">DENTAL CLINIC STATISTICS</h5>
      <div class="">
        <ChartLine
          :chart-data="datacollection"
          :options="options"/>
      </div>
    </div>
  </div>
</template>

<script>
import { areaConfig, areaChartOptions } from '@/configurations/ChartConfig'
import ChartLine from './ChartLine'

export default {
  components: {
    ChartLine
  },
  data () {
    return {
      datacollection: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: '',
            data: [23, 54, 63, 60, 65, 60, 68, 60],
            ...areaConfig
          }
        ]
      },
      options: areaChartOptions
    }
  }
}
</script>
