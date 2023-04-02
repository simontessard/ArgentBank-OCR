import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/api/v1/user/'

export const getUserProfile = (token) => {
  return axios
    .post(API_URL + 'profile', { headers: authHeader(token) })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error.response.data
    })
}
