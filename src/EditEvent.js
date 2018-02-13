import React from 'react';

const EditEvent = ({event, handleEventEdit, onInputChange, locations, editEvent, hideEventEdit}) => {
  return (
    <div className="form-container">
      <button className="close" onClick={hideEventEdit}>X</button>
      <form onSubmit={()=>handleEventEdit(event)}>
        <label>Event Title</label>
        <input
          type="text"
          value={editEvent.title}
          onChange={onInputChange}
          name="title"/> <br/>

          <label>Event Date and Time</label>
          <input
             type="datetime-local" value={editEvent.date_time} onChange={onInputChange}
             name="date_time" /> <br/>

        <label>Event Type</label>
        <select
            onChange={onInputChange}
            name="event_type"
            defaultValue={editEvent.event_type}>
              <option value='0'>Select One</option>
              <option key="1social" value='Social'>Social</option>
              <option key="1work" value='Work'>Work</option>
              <option key="1family" value='Family'>Family</option>
        </select> <br/>

        <label>Select Location</label>
        <select
           onChange={onInputChange}
           name="location_id"
           defaultValue={editEvent.location_id}
           >
           <option value='0'>Select One</option>
           {locations.map((location) =>
             <option key={location.id} value={location.id}>{location.name}</option>
           )}

        </select>

       <br/>
        <input type="submit" value="Save Updated Event"/>
      </form>

    </div>
  )
}

export default EditEvent;
