import React from 'react'
import EventItem from './EventItem'
import './App.css';
import NewEvent from './NewEvent'


let today = new Date();
let locale = "en-us";
let month = today.toLocaleString(locale, { month: "long" });

let daysInMonth = today.getDate()

daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}



export default class CalendarContainer extends React.Component {


  render() {

    return(
      <div>
      <button style={this.props.showNewEventForm ? {display: 'none'} : {display:'block'} } onClick={this.props.handleNewEventButtonClick}>Add New Event</button>
      <div style={this.props.showNewEventForm ? {display: 'block'} : {display:'none'} }>
         <NewEvent locations={this.props.locations}
         onInputChange={this.props.onInputChange}
         newEvent={this.props.newEvent}
         handleNewEventSubmit={this.props.handleNewEventSubmit}
         handleNewEventButtonClick={this.props.handleNewEventButtonClick
         }
         />
     </div>
        {this.props.events.map(event => {return <EventItem
            event={event}
            key={`${event.id}_list`} locations={this.props.locations}
            handleLocationInfoClick={this.props.handleLocationInfoClick}
            showLocationInDetail={this.props.showLocationInDetail}
          />})}
      </div>
    )
      }
    }
