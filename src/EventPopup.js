import React from 'react'
import EventDetail from './EventDetail'
import EditEvent from './EditEvent'

const EventPopup = ({event, locations, handleEventEdit,handleEventDelete, canEditForm, onInputChange, editEvent}) => {
  const locationInUse = locations.find(location => location.id === event.location_id)
  return (
    <div>
       { canEditForm ?
           <EditEvent event={event}
           handleEventEdit={handleEventEdit}
           locations={locations}
           onInputChange={onInputChange}
           editEvent={editEvent}
           /> :
      <div>
        <EventDetail event={event} key={`${event.id}_detail`} location={locationInUse}/>
        <button onClick={()=>handleEventEdit(event)}>Edit</button>
        <button onClick={()=>handleEventDelete(event)}>Delete</button>
      </div>
    }
    </div>
  )
}

export default EventPopup

// <button onClick={handlePopupClose}>X</button> display turnary function?
