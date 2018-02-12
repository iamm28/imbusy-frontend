import React from 'react'
import EventDetail from './EventDetail'

const EventItem = ({event, locations}) => {

  const locationInUse = locations.find(location => location.id === event.location_id)

  const seeEventDetails = () => {
    return true //create pop up with details and or form or redirect page to event details
  }

  return (
    <div onClick={seeEventDetails} className={`event event-start event-end ${event.event_type}`}>
      <p> Event Title: {event.title} </p>
      <EventDetail event={event} key={`${event.id}_detail`} location={locationInUse}/>
    </div>
  )
}

export default EventItem
