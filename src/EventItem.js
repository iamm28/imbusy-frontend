import React from 'react'
import EventDetail from './EventDetail'

const EventItem = ({event}) => {
  return (
    <div>
      <h1> {event.title} </h1>
      <h3> {event.date_time} </h3>
      <EventDetail event={event} key={`${event.id}_detail`}/>
    </div>
  )
}

export default EventItem
