import React from 'react'

const LocationDetail = ({location}) => {
  return(
    <div>
      <p>
      {location.name} <br/>
      {location.address} <br/>
      {location.website} <br/>
      {location.phone_number} <br/>

      </p>
    </div>
  )
}

export default LocationDetail
