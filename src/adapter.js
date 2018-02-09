const token = localStorage.getItem('token')
const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
}

const Singup_headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
}

const URL_ROOT = 'http://localhost:3001'
const API_ROOT = `${URL_ROOT}/api/v1`

const getEvents = () => {
  return fetch(`${API_ROOT}/events`, {
    headers: headers
  }).then(res => res.json())
}

const getLocations = () => {
  return fetch(`${API_ROOT}/locations`, {
    headers: headers
  }).then(res => res.json())
}

const login = (email, password) => {
  return fetch(`${URL_ROOT}/login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify( {email, password})
  }).then(res => res.json())
}

const signup = (signupBody) => {
  return fetch(`${URL_ROOT}/signup`, {
    method: 'POST',
    headers: Singup_headers,
    body: JSON.stringify({user: signupBody})
  }).then(res => res.json())
}

const getLoggedInUser = () => {
  return fetch(`${URL_ROOT}/current_user`, {
    headers: headers
  }).then(res => res.json())
}


export default {
  eventHandlers: {
    getEvents: getEvents,
    getLocations: getLocations
  },
  auth: {
    login,
    getLoggedInUser,
    signup
  }
}
