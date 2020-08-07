import React from 'react';
import { Redirect } from 'react-router-dom';

const DeleteCourse = (props) => {
  const { connection, authenticatedUser } = this.props;
  const { emailAddress, password } = authenticatedUser;
  const { id } = this.props.match.params;

  connection.deleteCourse(id, emailAddress, password);
  
  return (
    <Redirect to="/courses" />
  );
}