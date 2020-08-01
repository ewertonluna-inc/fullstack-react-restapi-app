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
          elements={(
            <React.Fragment>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <div>
                    <input 
                      id="title" 
                      name="title" 
                      type="text" 
                      className="input-title course--title--input" 
                      placeholder="Course title..." 
                      value={this.state.title}
                    />
                  </div>
                  <p>{`By ${this.state.firstName} ${this.state.lastName}`}</p>
                </div>
                <div className="course--description">
                  <div>
                    <input 
                      type="textarea" 
                      id="description" 
                      name="description" 
                      className="" 
                      placeholder="Course description..." 
                      value={this.state.description}
                    />
                  </div>
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" value={this.state.estimatedTime} /></div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                        <input
                          type="textarea" 
                          id="materialsNeeded" 
                          name="materialsNeeded" 
                          className="" 
                          placeholder="List materials..."
                          value={this.state.materialsNeeded}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}