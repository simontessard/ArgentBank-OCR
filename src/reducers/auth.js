import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types'

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
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    default:
      return state
  }
}
