import configStaging from './config.staging'
import configProd from './config.prod'

let config
if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_BACK === 'staging') {
    config = configStaging
  } else {
    config = configProd
  }
} else {
  config = configStaging
}
export default config
