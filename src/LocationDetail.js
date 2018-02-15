import React from 'react'

const LocationDetail = ({location}) => {
  return(
    <div>
      Location: {location.name} <br/>
      <div className="locationDiv">

        Address: <a href={`http://maps.google.com/?q=${location.address}`} target="_blank">{location.address}</a><br/>
        Website: <a href={location.website} target="_blank">{location.website}</a> <br/>
        Phone: {location.phone_number} <br/>
      </div>
    </div>
  )
}

export default LocationDetail
