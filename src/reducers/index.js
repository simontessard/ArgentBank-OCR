import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'

/* The combineReducers function turns an object whose values are different reducing functions 
into a single reducing function you can pass to createStore.
The resulting reducer calls every child reducer, and gathers their results into a single state object. */

export default combineReducers({
  auth,
  message,
})
