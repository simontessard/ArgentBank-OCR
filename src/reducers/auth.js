import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_USER } from '../actions/types'

const user = JSON.parse(localStorage.getItem('user'))
const token = JSON.parse(localStorage.getItem('token'))
const rememberMe = JSON.parse(localStorage.getItem('rememberMe'))

const initialState = user
  ? { isLoggedIn: true, user, token, rememberMe }
  : { isLoggedIn: false, user: null, token, rememberMe }

export default function authReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        token: payload.user.body.token,
        rememberMe: payload.rememberMe,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case GET_USER:
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        rememberMe: false,
      }
    default:
      return state
  }
}
