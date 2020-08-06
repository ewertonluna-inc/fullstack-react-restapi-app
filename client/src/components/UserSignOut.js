import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';


const UserSignOut = ({ signOut }) => {
  
  useEffect(() => {
    console.log(`User signed out!`)
    signOut();
  });

  return (
    <React.Fragment>
      <Redirect to="/courses" />
    </React.Fragment>
  );
}

export default UserSignOut;