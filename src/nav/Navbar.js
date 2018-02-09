import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

const loggedIn = !!props.currentUser

return (
  <nav>
    <div>
     <ul>
        { loggedIn ?
          <li><a onClick={props.logOut}>Logout</a></li>
        :
           <div>
           <li><Link to='/login'>Login</Link></li>
           <li><Link to='/signup'>Sign Up</Link></li>
           </div>
        }
        { loggedIn &&
        <li><Link to='/Calendar'>Calendar</Link></li>
        }
      </ul>
    </div>
  </nav>
)
}

export default Navbar
