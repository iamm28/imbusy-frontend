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
    auth: { currentUser: null }
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
  }

removeLoggedInUser = () => {
  localStorage.removeItem('token')
  this.setState({
    auth: { currentUser: null }
  })
  this.props.history.push('/login')
}


  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      adapter.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({ auth: { currentUser: user } })
          console.log(`user: ${user.email}`)

          adapter.eventHandlers.getEvents()
          .then(res => this.setState({
            events: res
          }))

          adapter.eventHandlers.getLocations()
          .then(res => this.setState({
            locations: res
          }))
          
        } else {
          this.setState({ auth: { currentUser: null } })
        }
      })
    } else {
      console.log('No token')
    }
  }

  render() {
    //console.log(this.state.events)
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
            locations={this.state.locations}/>
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
