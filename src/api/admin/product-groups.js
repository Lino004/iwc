import HTTP from '../HTTP'

const URL_BASE = 'admin/product-groups/'

export async function getProductGroups (query) {
  const response = await HTTP.get(URL_BASE, {
    params: query
  })
  return response
}
