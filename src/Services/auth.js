import store from '../stores/index'
import axios from 'axios'
// import router from 'vue-router'
import * as Cookies from 'js-cookie'
// import api from './api'

const AUTH_TOKEN_KEY = 'authToken'
// const SET_CURRENT_USER = 'currentUser'
export function setUserSession () {
  const jwt = store.state.authentication.authToken
  setAuthToken(jwt)
}

export function isLoggedIn () {
  const authToken = store.state.authentication.authToken
  return !!authToken
}
// Member
export function isRestaurantOwner () {
  if (isLoggedIn()) {
    const role = store.state.authentication.userRole
    return role === 'Restaurant-Owner'
  } else return false
}
// Admin
export function isAdmin () {
  if (isLoggedIn()) {
    const role = store.state.authentication.userRole
    return role === 'Restaurant-Owner'
  } else return false
}
// Organizer
export function isOrganizer () {
  if (isLoggedIn()) {
    const role = store.state.authentication.userRole.type
    return role === 'organizer'
  } else return false
}
export function logout () {
  clearAuthToken()
  store.dispatch('authentication/clearCurrentUser')
  sessionStorage.clear()
}
export function clearAuthToken () {
  axios.defaults.headers.common.Authorization = ''
  return Cookies.remove(AUTH_TOKEN_KEY)
}
// set token
export function setAuthToken (token) {
  // sessionStorage.setItem(AUTH_TOKEN_KEY, token)
  Cookies.set(AUTH_TOKEN_KEY, token)
}
