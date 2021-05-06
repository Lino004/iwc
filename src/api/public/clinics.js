import HTTP from '../HTTP'

const URL_BASE = 'clinics/'

export async function getClinic (id) {
  const response = await HTTP.get(`${URL_BASE}${id}`)
  return response
}
