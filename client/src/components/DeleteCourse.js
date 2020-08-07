import React from 'react';
import { Redirect } from 'react-router-dom';

const DeleteCourse = (props) => {
  const { connection } = this.props;
  const { id } = this.props.match.params;
  
  return (
    <Redirect to="/courses" />
  );
}