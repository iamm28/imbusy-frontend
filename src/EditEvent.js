import React from 'react';

const EditEvent = ({ handleEventEdit, onEditInputChange, locations, editEvent, hideEventEdit}) => {

  return (
    <div className="form-holder">
    <div className="form-div-with-titles">
      <button className="close" onClick={hideEventEdit}>X</button>
      <form onSubmit={handleEventEdit}>
        <label>Event Title</label>
        <input
          type="text"
          value={editEvent.title}
          onChange={onEditInputChange}
          name="title"/> <br/>

          <label>Event Date and Time</label>
          <input
             type="datetime-local" value={editEvent.date_time} onChange={onEditInputChange}
             name="date_time" /> <br/>

        <label>Event Type</label>
        <select
            onChange={onEditInputChange}
            name="event_type"
            defaultValue={editEvent.event_type}>
              <option value='0'>Select One</option>
              <option key="1social" value='Social'>Social</option>
              <option key="1work" value='Work'>Work</option>
              <option key="1family" value='Family'>Family</option>
        </select> <br/>

        <label>Select Location</label>
        <select
           onChange={onEditInputChange}
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
    </div>
  )
}

export default EditEvent;
