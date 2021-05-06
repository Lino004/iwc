import HTTP from '../HTTP'

const URL_BASE = 'regions/'

export async function getRegions (currentPage, perPage) {
  const response = await HTTP.get(URL_BASE, {
    params: {
      currentPage,
      perPage
    }
  })
  return response
}
