import React from 'react';

const SelectLocation = ({locations, onChange}) => {

  return (

    <select
       onChange={onChange}
       name="location_id"
       >
       <option value='0'>Select One</option>
       {locations.map((location) =>
         <option key={location.id} value={location.id}>{location.name}</option>
       )}

    </select>

  )
}

export default SelectLocation;
