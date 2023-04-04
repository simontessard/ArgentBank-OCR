import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE, GET_USER } from './types'

import { loginService, logoutService } from '../services/auth.service'
import { getUserProfileService } from '../services/user.service'

export const loginUser = (username, password) => (dispatch) => {
  return loginService(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      })
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: LOGIN_FAIL,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })
      return Promise.reject()
    }
  )
}

export const getUserProfile = (token) => (dispatch) => {
  return getUserProfileService(token).then((data) => {
    dispatch({
      type: GET_USER,
      payload: { user: data.body },
    })
    return Promise.resolve()
  })
}

export const logout = () => (dispatch) => {
  logoutService()
  dispatch({
    type: LOGOUT,
  })
}
