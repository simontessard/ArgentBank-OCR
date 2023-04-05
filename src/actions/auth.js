import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE, LOGOUT_REMEMBER } from './types'

import { loginService, logoutService } from '../services/auth.service'

export const loginUser = (username, password, rememberMe) => (dispatch) => {
  return loginService(username, password, rememberMe).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data, rememberMe: rememberMe },
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

export const logout = (rememberMe) => (dispatch) => {
  if (rememberMe) {
    logoutService()
    dispatch({
      type: LOGOUT_REMEMBER,
    })
  } else {
    logoutService()
    dispatch({
      type: LOGOUT,
    })
  }
}
