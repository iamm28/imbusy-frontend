import React from 'react'
import LocationDetail from './LocationDetail'

const EventDetail = ({event,location}) => {

  function getDate(event) {
    let eventDate = new Date(event.date_time)
    return eventDate.toLocaleDateString("en-US") + " " +eventDate.toLocaleTimeString("en-US", { timeZone: "America/New_York" })
  }

  return(
    <div>
      <p>{event.title}</p>
      <p>{getDate(event)}</p>
      <LocationDetail location={location} />
    </div>
  )
}

export default EventDetail
