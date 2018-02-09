import React from 'react';

const SelectLocation = ({locations}) => {

  return (
    <select>
    defaultValue='1'>
       <option value='1'>Select One</option>
       {locations.map((location) =>
         <option key={location.id} value={location}>{location.name}</option>
       )}

    </select>

  )
}

export default SelectLocation;
