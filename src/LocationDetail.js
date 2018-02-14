import React from 'react'

const LocationDetail = ({location}) => {
  return(
    <div>
      {location.name} <br/>
      {location.address} <br/>
      {location.website} <br/>
      {location.phone_number} <br/>
    </div>
  )
}

export default LocationDetail
