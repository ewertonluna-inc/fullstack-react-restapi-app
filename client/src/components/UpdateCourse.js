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
    return (
      <div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
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
                  <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                    value={this.state.title} onChange={this.change} /></div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
        </div>
      </div>
    );
    
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
}

export default UpdateCourse;