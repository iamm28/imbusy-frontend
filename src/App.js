import React, { Component } from 'react';
import './App.css';

import adapter from './adapter' //TODO problem starts here
import Navbar from './nav/Navbar'
import Login from './nav/Login'
import Signup from './nav/Signup'
import CalendarContainer from './CalendarContainer'

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

const CatchAll = (props) => {
    return(<h1> 404 Alert Page not found</h1>)
}

class App extends Component {
  state = {
    events: [],
    locations: [],
    invites: [],
    auth: { currentUser: null },
    newEvent: {
        title: '',
        date_time: '',
        event_type: '',
        location_id: ''
    },
    showNewEventForm: false,
    showLocationInDetail: false,
    locationDetail: []
  }

  setLoggedInUser = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({
      auth: {
        currentUser: {
          email: user.email,
          id: user.id
        }
      }
    })
    this.getInvitesAndEvents()
    this.getLocations()
  }

removeLoggedInUser = () => {
  localStorage.removeItem('token')
  this.setState({
    auth: { currentUser: null },
    events: [],
    locations: [],
    invites: []
  })
  this.props.history.push('/login')
}

getInvitesAndEvents = () => {
adapter.eventHandlers.getInvites()
  .then(resp=> this.filterInvitesForCurrentUser(resp))
  .then(res => this.setState({
    invites: res
  }))
  .then(ress => adapter.eventHandlers.getEvents())
  .then(resp => this.filterEventsForInvites(resp))
  .then(res => this.setState({
    events: res
  }))
}

getLocations = () => {
  adapter.eventHandlers.getLocations()
  .then(res => this.setState({
    locations: res
  }))
}


  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      adapter.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({ auth: { currentUser: user} })
          this.getInvitesAndEvents()
          console.log(`user: ${user.email}`)
          this.getLocations()

        } else {
          this.setState({ auth: { currentUser: null } })
        }
      })
    } else {
      console.log('No token')
    }
  }

  filterInvitesForCurrentUser = (inviteList) => {
    return inviteList.filter(invite => invite.user_id === this.state.auth.currentUser.id)
  }

  filterEventsForInvites = (eventList) => {

    let invites = this.state.invites.map(invite=> invite.event_id)

    return eventList.filter(event => invites.indexOf(event.id)  > -1)

  }


  onInputChange = (e) => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        [e.target.name]: e.target.value
    }
  })
  }

handleNewEventSubmit = (event) => {
  event.preventDefault()
  adapter.eventHandlers.addEvent(this.state.newEvent)
  .then(resp => {
    this.setState({
      events: [...this.state.events, resp]
    })
    adapter.eventHandlers.addInvite( this.state.auth.currentUser.id, resp.id)
  });
   
  this.setState({
    newEvent: {
      title: '',
      date_time: '',
      event_type: '',
      location_id: ''
    },
    showNewEventForm: !this.state.showNewEventForm
  })

}

handleNewEventButtonClick = () => {
  this.setState({
    showNewEventForm: !this.state.showNewEventForm
  })
}

handleLocationInfoClick = () => {
  this.setState({
    showLocationInDetail: !this.state.showLocationInDetail
  })
}

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navbar currentUser={this.state.auth.currentUser}
         logOut={this.removeLoggedInUser} />
        <Switch>
          <Route exact path='/login' render={ (routerProps) => {
            return <Login history={routerProps.history} setUser={this.setLoggedInUser} />
          }} />

          <Route exact path='/signup' render={ (routerProps) => {
            return <Signup history={routerProps.history} setUser={this.setLoggedInUser} />
          }} />

          <Route exact path="/calendar" render={ () => {
            return <CalendarContainer events={this.state.events} authInfo={this.state.auth}
            locations={this.state.locations}
            onInputChange={this.onInputChange}
            newEvent={this.state.newEvent}
            handleNewEventSubmit={this.handleNewEventSubmit}
            handleNewEventButtonClick={this.handleNewEventButtonClick}
            showNewEventForm={this.state.showNewEventForm}
            handleLocationInfoClick={this.handleLocationInfoClick}
            showLocationInDetail={this.state.showLocationInDetail}

            />
          } } />

          <Route path="/404" component={ CatchAll } />
          <Redirect exact from="/" to="/login" />
          <Redirect to="/404" />


        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

// .then(res => adapter.eventHandlers.addInvite(res.id, this.state.currentUser.id))
