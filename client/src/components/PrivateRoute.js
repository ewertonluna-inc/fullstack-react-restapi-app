import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/* HOC that wraps a Route component. It will only render the desired component if a user is authenticated. */
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