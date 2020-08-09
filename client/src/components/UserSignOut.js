import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// This component will change the global authenticated user state to null and render the main courses page.
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