import React from 'react';
import SelectLocation from './SelectLocation';

class NewEvent extends React.Component {

  state = {
    title: '',
    date_time: '',
    event_type: '',
    location: ''
  }


onInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}




render (){
  return (
    <div>
      <h1> new event form</h1>
      <form>
         <SelectLocation locations={this.props.locations}/>
      </form>
    </div>
  )
}
}

export default NewEvent;
