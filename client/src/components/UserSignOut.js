import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';


const UserSignOut = ({ authenticatedUser, signOut }) => {
  
  useEffect(() => {
    console.log(`User ${authenticatedUser} signed out!`)
    signOut();
  });

  return (
    <React.Fragment>
      <Redirect to="/courses" />
    </React.Fragment>
  );
}

export default UserSignOut;