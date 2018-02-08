// const token = localStorage.getItem('token')
const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
}
// Authorization: token
const URL_ROOT = 'http://localhost:3001'
const API_ROOT = `${URL_ROOT}/api/v1`

const getEvents = () => {
  return fetch(`${API_ROOT}/events`, {
    headers: headers
  }).then(res => res.json())
}

export default {
  eventHandlers: {
    getEvents: getEvents
  }
}
