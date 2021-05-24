<script>
import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(247, 229, 184, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(247, 229, 184, 0.25)')
    this.gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

    this.chartData.datasets.forEach(element => {
      element.backgroundColor = this.gradient
    })

    this.renderChart(this.chartData, this.options)
  }
}
</script>
