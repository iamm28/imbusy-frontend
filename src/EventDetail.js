import React from 'react'
import LocationDetail from './LocationDetail'

const EventDetail = ({event,location}) => {

  function getTime() {
    let time = new Date(event.date_time)
    if (time.getHours() > 12) {
      return time.getHours()-12 + ":" + time.getMinutes()
    } else {
      return time.getHours() + ":" + time.getMinutes()
    }
  }

  return(
    <div>
      <p>Detail Title - {event.title}</p>
      <p>Detail Location id - {event.location_id}</p>
      <p>Detail time - {getTime()}</p>
      <button>Location Info</button>
      <LocationDetail location={location} />
    </div>
  )
}

export default EventDetail
