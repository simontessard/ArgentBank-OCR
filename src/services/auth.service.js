import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/'

export const loginService = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}

export const logoutService = () => {
  localStorage.removeItem('user')
}
