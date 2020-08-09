import React from 'react';
import config from '../config';
import { Link } from 'react-router-dom';

class Courses extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    this.fetchCourses();
  }

  // Fetch for list of courses every time the Component is rendered.
  componentDidUpdate(prevProps, prevState) {
    if (this.state.courses.length !== prevState.courses.length) {
      this.fetchCourses();
    }
  }

  fetchCourses = () => {
    const options = { headers: { 'Accept': 'application/json'} }

    fetch(config.apiBaseURL + '/courses', options)
      .then(response => response.status === 200 ? response.json() : null )
      .then(data => data ? data.courses : [])  // data is a { course: Array(n) } object
      .then(courses => this.setState({ courses }))
      .catch(err => console.log('Error when fetching resource:', err));
  }

  render(){
    const { courses } = this.state;
    

    return (
      <div className="bounds">
        {/* Render each course here */}
        {courses.map(course => {
          const { id, title } = course

          return (
            <div key={id} className="grid-33">
              <Link className="course--module course--link" to={`/courses/${id}`}>
                <h4 className="course--label">Course</h4>
                <h3 className="course--title">{title}</h3>
              </Link>
            </div>
          )
        })}
        <div className="grid-33">
          <Link to="/courses/create" className="course--module course--add--module">
            <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 13 13" className="add">
                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
              </svg>New Course</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Courses;