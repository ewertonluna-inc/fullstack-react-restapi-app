import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ authenticatedUser }) => {
  
  return (
    <React.Fragment>
      <div className="header"> 
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              {authenticatedUser ? 
                <nav><span>{`Welcome, ${authenticatedUser.firstName} ${authenticatedUser.lastName}`}</span><Link className="signout" to="/signout">Sign Out</Link></nav> 
                : 
                <nav><Link className="signup" to="/signup">Sign Up</Link><Link className="signin" to="/signin">Sign In</Link></nav>
              }
            </nav>
          </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Header