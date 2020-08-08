import React from 'react';
import Form from './Form';

class UpdateCourse extends React.Component {
  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors: [],
  }

  componentDidMount() {
    const { connection } = this.props;
    const { id } = this.props.match.params;
    connection.getCourse(id)
      .then(data => {
        if (data) {
          const { title, description, estimatedTime, materialsNeeded } = data.course;
          this.setState({ title, description, estimatedTime, materialsNeeded });
        }
      })
      .catch(err => console.warn('Error fetching course:', err));
  }

  render() {
    const user = this.props.authenticatedUser;
    const { firstName, lastName } = user;

    return (
      <div className="bounds course--detail">
        <h1>Update Course</h1>
        <Form
          submitButtonText="Update Course"
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
                      id="title" 
                      name="title" 
                      type="text" 
                      className="input-title course--title--input" 
                      placeholder="Course title..."
                      value={this.state.title} 
                      onChange={this.change} 
                    />
                  </div>
                  <p>{`By ${firstName} ${lastName}`}</p>
                </div>
                <div className="course--description">
                  <div>
                    <textarea 
                      id="description" 
                      name="description" 
                      className="" 
                      placeholder="Course description..."
                      onChange={this.change} 
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
                      <div>
                        <input 
                          id="estimatedTime" 
                          name="estimatedTime" 
                          type="text" 
                          className="course--time--input" 
                          placeholder="Hours"
                          onChange={this.change} 
                          value={this.state.estimatedTime || ''}
                        />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                        <textarea 
                          id="materialsNeeded" 
                          name="materialsNeeded" 
                          className="" 
                          placeholder="List materials..."
                          onChange={this.change}
                          value={this.state.materialsNeeded || ''}
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

  submit = () => {
    const { connection, password, match, authenticatedUser } = this.props;
    const id = match.params.id;
    const { title, description, materialsNeeded, estimatedTime } = this.state;
    const course = { title, description, materialsNeeded, estimatedTime };
    connection.updateCourse(id, course, authenticatedUser.emailAddress, password)
      .then(errors => {
        if (errors.length > 0) {
          this.setState({errors});
        } else {
          console.log('Course updated successfully!');
          this.props.history.push(`/courses/${id}`);
        }
      })
      .catch(err => console.log('Error submitting course update', err));
  }

  cancel = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/courses/${id}`);
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
}

export default UpdateCourse;