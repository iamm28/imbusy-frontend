import React from 'react'

const EventDetail = ({event}) => {

  function getTime() {
    let time = new Date(event.date_time)
    if (time.getHours() > 12) {
      return time.getHours()-12 + ":" + time.getMinutes()
    } else {
      return time.getHours() + ":" + time.getMinutes()
    }
  }

  return(
    <div>
      <p>Detail Title - {event.title}</p>
      <p>Detail Location id - {event.location_id}</p>
      <p>Detail time - {getTime()}</p>
    </div>
  )
}

export default EventDetail
