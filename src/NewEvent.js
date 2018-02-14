import React from 'react';
import SelectLocation from './SelectLocation';

class NewEvent extends React.Component {


render (){
  return (
    <div className="form-holder">
    <div className="form-div-with-titles">
    <button className="close" onClick={this.props.handleNewEventButtonClick}>X</button>
    <h3> Add Something Else To-Do</h3>

      <form onSubmit={this.props.handleNewEventSubmit}>

        <label>Event Title</label>
        <input
          type="text"
          value={this.props.newEvent.title}
          onChange={this.props.onInputChange}
          name="title"/> <br/>

        <label>Event Date and Time</label>
        <input
           type="datetime-local" value={this.props.newEvent.date_time} onChange={this.props.onInputChange}
           name="date_time" /> <br/>

        <label>Event Type</label>
        <select
            onChange={this.props.onInputChange}
            name="event_type">
              <option value='0'>Select One</option>
              <option key="1social" value='Social'>Social</option>
              <option key="1work" value='Work'>Work</option>
              <option key="1family" value='Family'>Family</option>
        </select> <br/>
        <label>Select Location</label>
         <SelectLocation
            locations={this.props.locations}
            onChange={this.props.onInputChange}
         /> <br/>
        <input type="submit" value="Add Event"/>
      </form>
      </div>
    </div>
  )
}
}

export default NewEvent;
