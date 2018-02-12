import React from 'react'

const LocationDetail = ({location}) => {
  return(
    <div>
      <p>
      {location.name}
      {location.address}
      {location.website}
      {location.phone_number}

      </p>
    </div>
  )
}

export default LocationDetail
