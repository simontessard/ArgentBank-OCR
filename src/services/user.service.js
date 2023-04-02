import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/api/v1/user/'

export const getUserProfile = () => {
  return axios.post(API_URL + 'profile', { headers: authHeader() })
}

export const updateUserProfile = () => {
  return axios.put(API_URL + 'profile', { headers: authHeader() })
}
