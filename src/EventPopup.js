import React from 'react'
import EventDetail from './EventDetail'
import EditEvent from './EditEvent'

const EventPopup = ({event, locations, handleEventEdit,handleEventDelete, canEditForm, onEditInputChange, editEvent, showEventEdit, hideEventEdit, hideEventDetail}) => {
  const locationInUse = locations.find(location => location.id === event.location_id)
  return (
    <div>
       { canEditForm ?
           <EditEvent
           handleEventEdit={handleEventEdit}
           locations={locations}
           onEditInputChange={onEditInputChange}
           editEvent={editEvent}
           hideEventEdit={hideEventEdit}
           /> :
      <div className="form-holder">
      <div className="form-div-with-titles">
        <button className="close" onClick={hideEventDetail}>X</button>
        <EventDetail event={event} key={`${event.id}_detail`} location={locationInUse}/>
        <button onClick={()=>showEventEdit(event)}>Edit</button>
        <button onClick={()=>handleEventDelete(event)}>Delete</button>
      </div>
      </div>
    }
    </div>
  )
}

export default EventPopup

// <button onClick={handlePopupClose}>X</button> display turnary function?
