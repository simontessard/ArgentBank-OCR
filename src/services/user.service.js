import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/'

export const getUserProfile = (token) => {
  return axios
    .post(API_URL + 'profile', { headers: { Authorization: 'Bearer ' + token } })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error.response.data
    })
}
