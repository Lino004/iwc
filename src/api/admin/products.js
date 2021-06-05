import HTTP from '../HTTP'

const URL_BASE = 'admin/products/'

export async function getProducts (query) {
  const response = await HTTP.get(URL_BASE, {
    params: query
  })
  return response
}

export async function getProduct (id) {
  const response = await HTTP.get(URL_BASE + id)
  return response
}

export async function updateProduct (data, id) {
  const response = await HTTP.put(URL_BASE + id, data)
  return response
}

export async function deleteProducts (ids) {
  const response = await HTTP.delete(URL_BASE, { ids })
  return response
}

export async function createProduct (data) {
  const response = await HTTP.post(URL_BASE, data)
  return response
}
