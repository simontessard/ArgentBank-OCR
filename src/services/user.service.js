import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/'

// Call a POST request to the API to get the user profile
export const getUserProfileService = (token) => {
  return axios
    .post(API_URL + 'profile', {}, { headers: { Authorization: 'Bearer ' + token } })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error.response.data
    })
}

// Call a PUT request to the API to update the user profile
export const updateUserProfileService = (newFirstName, newLastName, token) => {
  return axios
    .put(
      API_URL + 'profile',
      { firstName: newFirstName, lastName: newLastName },
      { headers: { Authorization: 'Bearer ' + token } }
    )
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error.response.data
    })
}
