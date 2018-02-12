import React from 'react'
import LocationDetail from './LocationDetail'

const EventDetail = ({event, location}) => {

  return(

    <div>
      <p>
      {event.location_id} | {event.event_type} | {location.name}
      </p>
      <button>Location Info</button>
      <LocationDetail location={location} />
    </div>
  )
}

export default EventDetail
