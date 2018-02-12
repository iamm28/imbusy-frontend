import React from 'react'
import LocationDetail from './LocationDetail'

const EventDetail = ({event, location, handleLocationInfoClick}) => {


  return(
    <div>
      <p>
        {location.name} | {event.event_type}
      </p>
      <button onClick={handleLocationInfoClick}>Location Info</button>
      <LocationDetail location={location} />
    </div>
  )
}

export default EventDetail
