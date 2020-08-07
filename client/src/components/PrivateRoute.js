import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticatedUser, connection, password, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => authenticatedUser ?
        <Component {...props} authenticatedUser={authenticatedUser} password={password} connection={connection} />
        :
        <Redirect to="/signin"/>
      }
    />
  );
}

export default PrivateRoute;