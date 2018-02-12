import React from 'react'
import EventDetail from './EventDetail'

const EventItem = ({event, locations}) => {

  const locationInUse = locations.find(location => location.id === event.location_id)

  return (
    <div>
      <h1> {event.title} </h1>
      <h3> {event.date_time} </h3>

      <p>{locationInUse.name}</p>

      <EventDetail event={event} key={`${event.id}_detail`} location={locationInUse} />
    </div>
  )
}

export default EventItem
