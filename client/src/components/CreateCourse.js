import React from 'react';
import Form from './Form';

class CreateCourse extends React.Component {

  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
  };

  
  submit = () => {

  }

  cancel = () => {

  }

  render() {
    return (
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <Form 
          submitButtonText="Create Course"

        />
      </div>
    );
  }
}