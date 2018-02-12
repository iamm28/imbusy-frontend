import React from 'react'
import EventDetail from './EventDetail'

const EventPopup = ({event, locations, handleEventEdit, handleEventDelete}) => {
  const locationInUse = locations.find(location => location.id === event.location_id)
  return (
    <div>
      <EventDetail event={event} key={`${event.id}_detail`} location={locationInUse}/>
      <button onClick={()=>handleEventEdit(event)}>Edit</button>
      <button onClick={()=>handleEventDelete(event)}>Delete</button>
    </div>
  )
}

export default EventPopup

// <button onClick={handlePopupClose}>X</button> display turnary function?
