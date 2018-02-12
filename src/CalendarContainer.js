import React from 'react'
import EventItem from './EventItem'
import './App.css';
import NewEvent from './NewEvent'
import EventPopup from './EventPopup'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

export default class CalendarContainer extends React.Component {

  state = {
    year: yyyy,
    month: mm
  }

  getMonth() { //gets month in word form
    return monthNames[this.state.month-1]
  }

  getDaysInMonth () { //gets number of days in a month
    return new Date(this.state.year, this.state.month, 0).getDate();
  }

  getDayOfWeek () { //gets the day of the week the month starts on in number now but could make it in words too
    if(this.state.month < 10) {
      return new Date(this.state.year + "-" + this.state.month + "-01").getDay()
    } else {
      return new Date(this.state.year + "-" + this.state.month + "-01").getDay() + 1
    }
  }

  nextMonth = () => {
    if (this.state.month === 12) {
      this.setState({
        month: 1,
        year: this.state.year + 1
      })
    } else {
      this.setState({
        month: this.state.month + 1
      })
    }
  }

  prevMonth = () => {
    if (this.state.month === 1) {
      this.setState({
        month: 12,
        year: this.state.year - 1
      })
    } else {
      this.setState({
        month: this.state.month - 1
      })
    }
  }

  displayFillers() {
    let fillers = []
    for (let i = 0; i < this.getDayOfWeek(); i++) {
      fillers.push(
        <div className="day" key={i+1}>
        </div>
      );
    }
    return fillers
  }

  displayDays() {
    let days = []
    let passMonth = this.state.month
    let passYear = this.state.year
    for (let i = 0; i < this.getDaysInMonth(); i++) {

      function getEventDay(event) {
        return new Date(event.date_time).getDate()
      }

      function getEventMonth(event) {
        return new Date(event.date_time).getMonth()+1
      }

      function getEventYear(event) {
        return new Date(event.date_time).getYear()-100+2000
      }

      function filterEvent(event,i) {
        if ((passMonth === getEventMonth(event)) && ((i+1)===getEventDay(event)) && (passYear === getEventYear(event))) {
          return true
        } else {
          return false
        }
      }

      let todaysEvents = this.props.events.filter( event => {
        return filterEvent(event,i)
      })
      days.push(
        <div className="day" key={i+1}>
          <h3 className="day-label">{i+1}</h3>
          {todaysEvents.map(event => {return (
            <EventItem
              event={event}
              key={`${event.id}_list`}
              locations={this.props.locations}
              handleEventDetailsClick={this.props.handleEventDetailsClick}
              />
          )})}
        </div>
      );
    }
    return days
  }

  //fix rendering button names jan,dec
  render() {
    return(
      <div>
        <button style={this.props.showNewEventForm ? {display: 'none'} : {display:'block'} } onClick={this.props.handleNewEventButtonClick}>Add New Event</button>
        <div style={this.props.showNewEventForm ? {display: 'block'} : {display:'none'} }>
           <NewEvent locations={this.props.locations}
           onInputChange={this.props.onInputChange}
           newEvent={this.props.newEvent}
           handleNewEventSubmit={this.props.handleNewEventSubmit}
           handleNewEventButtonClick={this.props.handleNewEventButtonClick}
           />
       </div>
       { this.props.eventInDetail &&
         <div>
           <EventPopup event={this.props.eventInDetail} locations={this.props.locations} handleEventEdit={this.props.handleEventEdit} handleEventDelete={this.props.handleEventDelete}/>
         </div>
       }
        <span>
          <button onClick={this.prevMonth}>{monthNames[this.state.month-2]}</button>
          <button onClick={this.nextMonth}>{monthNames[this.state.month]}</button>
          <h2 className="month"> {this.getMonth()} - {this.state.year}</h2>
        </span>
        <div className="day-of-week">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        <div className="week">
          {this.displayFillers()}
          {this.displayDays()}
        </div>
      </div>
    )
      }
    }
