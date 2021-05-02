import HTTP from '../HTTP'

const URL_BASE = 'settings/website/'

export async function get () {
  const response = await HTTP.get(URL_BASE)
  return response
}
