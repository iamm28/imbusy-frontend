import React from 'react'
import EventItem from './EventItem'

export default class CalendarContainer extends React.Component {

  render() {

    return(
      <div>
        {this.props.events.map(event => {return <EventItem event={event} key={`${event.id}_list`} />})}
      </div>
    )
  }
}
