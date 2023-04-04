import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from './types'

import { loginService, logoutService } from '../services/auth.service'

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

export const logout = () => (dispatch) => {
  logoutService()
  dispatch({
    type: LOGOUT,
  })
}
