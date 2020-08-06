import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticatedUser, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => authenticatedUser ?
        <Component {...props} />
        :
        <Redirect to="/signin"/>
      }
    />
  );
}

export default PrivateRoute;