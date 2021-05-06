import HTTP from '../HTTP'

const URL_BASE = 'contact/'

export async function sendContact (data) {
  const response = await HTTP.post(`${URL_BASE}`, data)
  return response
}
