import React from 'react'


const EventItem = ({event, handleEventDetailsClick}) => {

  return (
    <div onClick={() => handleEventDetailsClick(event)} className={`event event-start event-end ${event.event_type}`}>
      <p> Event Title: {event.title} </p>
    </div>
  )
}

export default EventItem
