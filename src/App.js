import React, { Component } from 'react';
import './App.css';

import adapter from './adapter' //TODO problem starts here
import CalendarContainer from './CalendarContainer'
import { Route, Switch, Redirect } from 'react-router-dom'

const RenderLogin = (props) => {
    return(<p> Login page</p>)
}

const RenderSignup = (props) => {
    return(<p> Sign up page</p>)
}

const CatchAll = (props) => {
    return(<h1> 404 Alert Page not found</h1>)
}

class App extends Component {
  state = {
    events: []
  }

  componentDidMount() {
    adapter.eventHandlers.getEvents()
    .then(res => this.setState({
      events: res
    }))

  }
  render() {
    //console.log(this.state.events)
    return (
      <div className="App">
        <Switch>
          <Route exact path='/login' component={ RenderLogin} />
          <Route exact path='/signup' component={ RenderSignup} />
          <Route exact path="/calendar" render={ () => {
            return <CalendarContainer events={this.state.events}/>
          } } />
          <Route path="/404" component={ CatchAll } />
          <Redirect exact from="/" to="/login" />
          <Redirect to="/404" />


        </Switch>
      </div>
    );
  }
}

export default App;
