import HTTP from '../HTTP'

const URL_BASE = 'dentists/'

export async function getDentists (clinic, currentPage, perPage, prcNumber, search, sort, specialization) {
  const response = await HTTP.get(URL_BASE, {
    params: {
      clinic,
      currentPage,
      perPage,
      prcNumber,
      search,
      sort,
      specialization
    }
  })
  return response
}
