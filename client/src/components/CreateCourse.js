import React from 'react';
import Form from './Form';

class CreateCourse extends React.Component {

  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors,
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
          submit={this.submit}
          cancel={this.cancel}
          errors={this.state.errors}
          element={() => (
            
          )}
        />
      </div>
    );
  }
}