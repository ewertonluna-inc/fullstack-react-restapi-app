import React from 'react';
import { Redirect } from 'react-router-dom';

// This component will only render if user is authenticated and authorized. Then it will redirect to the courses main page.
const DeleteCourse = ({ password, connection, authenticatedUser, match }) => {
  const { emailAddress } = authenticatedUser;
  const { id } = match.params;

  // Send request to delete course.
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