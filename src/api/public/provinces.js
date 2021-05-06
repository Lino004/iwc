import HTTP from '../HTTP'

const URL_BASE = 'provinces/'

export async function getProvinces (currentPage, perPage, region) {
  const response = await HTTP.get(URL_BASE, {
    params: {
      currentPage,
      perPage,
      region
    }
  })
  return response
}
