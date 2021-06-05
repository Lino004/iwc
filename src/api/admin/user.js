import HTTP from '../HTTP'

const URL_BASE = 'admin/auth/'

export async function getUser () {
  const response = await HTTP.get(URL_BASE + 'user')
  return response
}

export async function login (email, password) {
  const response = await HTTP.post(URL_BASE + 'login', {
    email,
    password
  })
  return response
}
