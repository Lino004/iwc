// const bgChart = 'linear-gradient(0deg, #ffffff 0%, #c29c4a 100%)'
const secondary = '#C29C4A'

const chartTooltip = {
  backgroundColor: secondary,
  borderWidth: 0.5,
  bodySpacing: 10,
  xPadding: 10,
  yPadding: 10,
  cornerRadius: 0.15
}

export const areaConfig = {
  borderColor: secondary,
  pointBackgroundColor: secondary,
  pointBorderColor: secondary,
  pointHoverBackgroundColor: secondary,
  pointHoverBorderColor: secondary,
  pointRadius: 4,
  pointBorderWidth: 2,
  pointHoverRadius: 5,
  fill: true,
  borderWidth: 2
  // backgroundColor: bgChart
}

export const areaChartOptions = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  scales: {
    yAxes: [
      {
        display: false,
        gridLines: {
          display: false
        }
      }
    ],
    xAxes: [
      {
        display: false,
        gridLines: {
          display: false
        }
      }
    ]
  }
}
