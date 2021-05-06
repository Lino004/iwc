import HTTP from '../HTTP'

const URL_BASE = 'specializations/'

export async function getSpecializations (currentPage, perPage, sort) {
  const response = await HTTP.get(URL_BASE, {
    params: {
      currentPage,
      perPage,
      sort
    }
  })
  return response
}
