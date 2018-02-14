import React from 'react';
import adapter from '../adapter';

let welcomeNewMessage = "Welcome to I'm Busy"

class Signup extends React.Component {
  state = {
    full_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

 handleSignup = (e) => {
   e.preventDefault()
   adapter.auth.signup(this.state).then(resp => {
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
    <h1>{welcomeNewMessage}</h1>
    <h2>Join Here!</h2>
    <form onSubmit={this.handleSignup}>
      <label>Full Name</label>
      <input value={this.state.full_name} name="full_name" type="text" placeholder="Full Name" onChange={this.onInputChange}/> <br/>

      <label>Email</label>
      <input value={this.state.email} name="email" type="email" placeholder="Email" onChange={this.onInputChange}/> <br/>

      <label>Password</label>
      <input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onInputChange}/> <br/>

      <label>Password Confirmation</label>
      <input value={this.state.password_confirmation} name="password_confirmation" type="password" placeholder="Password Confirmation" onChange={this.onInputChange}/> <br/>

      <input type="submit" value="Sign Up" />
    </form>
    </div>
    </div>
  )
}
}



export default Signup;
