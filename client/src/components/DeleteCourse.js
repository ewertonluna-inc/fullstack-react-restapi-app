import React from 'react';
import { Redirect } from 'react-router-dom';

const DeleteCourse = ({ password, connection, authenticatedUser, match }) => {
  const { emailAddress } = authenticatedUser;
  const { id } = match.params;

  connection.deleteCourse(id, emailAddress, password)
    .then(errors => {
      const message = errors.length > 0 ? `Course could not be deleted: ${errors}` : 'Course deleted!'
      console.log(message);
    })
    .catch(err => console.log('An error happened while trying to delete course:', err));
  
  return (
    <React.Fragment>
      <Redirect to="/courses" />
    </React.Fragment>
  );
}

export default DeleteCourse;