import React from 'react';

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