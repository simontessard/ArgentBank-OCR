import { GET_USER } from './types'

import { getUserProfileService, updateUserProfileService } from '../services/user.service'

export const getUserProfile = (token) => (dispatch) => {
  return getUserProfileService(token).then((data) => {
    dispatch({
      type: GET_USER,
      payload: { user: data.body },
    })
    return Promise.resolve()
  })
}

export const updateUserProfile = (newFirstName, newLastName, token) => (dispatch) => {
  return updateUserProfileService(newFirstName, newLastName, token).then((data) => {
    dispatch({
      type: GET_USER,
      payload: { user: data.body },
    })
    return Promise.resolve()
  })
}
