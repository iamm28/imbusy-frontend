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

const getInvites = () => {
  return fetch(`${API_ROOT}/invites`, {
    headers: headers
  }).then(res => res.json())
}

const addEvent = (newEvent) => {
  return fetch(`${API_ROOT}/events`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({event: newEvent})
  }).then(res => res.json())
}

const addInvite = (user_id, event_id) => {
  return fetch(`${API_ROOT}/invites`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({invite: {user_id: user_id, event_id: event_id}})
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

const deleteEvent = (event) => {
  return fetch(`${API_ROOT}/events/${event.id}`, {
    method: 'DELETE',
    headers: headers
  })
}

const editEvent = (id, eventItem) =>{
  console.log(id)
  return fetch(`${API_ROOT}/events/${id}`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({event: {id: id, title: eventItem.title, date_time: eventItem.date_time, event_type: eventItem.event_type, location_id: eventItem.location_id}})
  }).then(res => res.json())
}

export default {
  eventHandlers: {
    getEvents: getEvents,
    getLocations: getLocations,
    addEvent: addEvent,
    addInvite: addInvite,
    getInvites: getInvites,
    deleteEvent: deleteEvent,
    editEvent: editEvent
  },
  auth: {
    login,
    getLoggedInUser,
    signup
  }
}
