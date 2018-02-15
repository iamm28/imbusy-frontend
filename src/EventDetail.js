import React from 'react'
import LocationDetail from './LocationDetail'

const EventDetail = ({event,location}) => {

  function getDate(event) {
    let eventDate = new Date(event.date_time)
    return eventDate.toLocaleDateString("en-US") + " " + eventDate.toLocaleTimeString("en-US")
  }

  return(
    <div className="eventDiv">
      <p>
        Title: {event.title} <br/>
        Time: {getDate(event)}  <br/>
      </p>
      <LocationDetail location={location} />
    </div>
  )
}

export default EventDetail
// Location: {location.name}
