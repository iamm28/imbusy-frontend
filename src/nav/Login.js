import React from 'react';
import adapter from '../adapter';

let welcomeMessage = "Welcome Back to I'm Busy"

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

 handleLogin = (e) => {
   e.preventDefault()
   adapter.auth.login(this.state.email, this.state.password).then(resp => {
     if (resp.error) {
       alert(resp.error)
     } else {
       this.props.history.push('/calendar')
       this.props.setUser(resp)

     }
   })
 }

 onInputChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   })
 }

render(){
  return (
    <div className="form-holder">
    <div className="form-div-with-titles">
    <h1>{welcomeMessage} </h1>
    <h2>Sign In</h2>
    <div>
    <form onSubmit={this.handleLogin}>
      <label>Email </label>
      <input value={this.state.email} name="email" type="email" placeholder="Email" onChange={this.onInputChange}/> <br/>

      <label>Password </label>
      <input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onInputChange}/> <br/>
      <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
    </div>
  )
}
}

export default Login;
