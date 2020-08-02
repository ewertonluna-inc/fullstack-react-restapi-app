import React from 'react';
import Form from './Form';

// This component will only render if user is authenticated
class CreateCourse extends React.Component {

  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors: [],
  };
  
  submit = () => {
    const { connection, authenticatedUser } = this.props;
    const course = {
      title: this.state.title,
      description: this.state.description,
      estimatedTime: this.state.estimatedTime,
      materialsNeeded: this.state.materialsNeeded,
    };
    connection.createCourse(course, authenticatedUser)
      .then(errors => {
        if (errors.length > 0) {
          this.setState({errors});
        } else {
          console.log('New course created');
          this.props.history.push('/courses');
        }
      })
      .catch(err => console.warn('Error creating course:', err));
  }

  cancel = () => {
    this.props.history.push('/courses');
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  render() {
    const {
      authenticatedUser
    } = this.props;

    return (
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <Form 
          submitButtonText="Create Course"
          submit={this.submit}
          cancel={this.cancel}
          errors={this.state.errors}
          elements={() => (
            <React.Fragment>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <div>
                    <input
                      onChange={this.change} 
                      id="title" 
                      name="title" 
                      type="text" 
                      className="input-title course--title--input" 
                      placeholder="Course title..." 
                      value={this.state.title}
                    />
                  </div>
                  {/*TODO: Change this p tag later */}
                  <p>{authenticatedUser ? `By ${authenticatedUser.firstName} ${authenticatedUser.lastName}` : null}</p>
                </div>
                <div className="course--description">
                  <div>
                    <textarea 
                      onChange={this.change}
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
                      <div><input onChange={this.change} id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" value={this.state.estimatedTime} /></div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                        <textarea
                          onChange={this.change} 
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

export default CreateCourse;