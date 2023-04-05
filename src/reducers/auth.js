import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_USER, LOGOUT_REMEMBER } from '../actions/types'

const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const initialState = user
  ? { isLoggedIn: true, user, token }
  : { isLoggedIn: false, user: null, token: null }

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
      }
    case LOGOUT_REMEMBER:
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state
  }
}
