import axios from 'axios'
import config from './config'
import store from '../store'

const HTTP = axios.create()

HTTP.interceptors.request.use((request) => {
  request.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + store.getters.token
  }
  if (request.url.indexOf('http') === -1) {
    request.url = config.BASE_URL + request.url
  }
  return request
}, (error) => {
  return Promise.reject(error)
})

export default HTTP
