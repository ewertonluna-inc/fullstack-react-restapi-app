import React from 'react';
import config from '../config';

class Courses extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
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
              <a className="course--module course--link" href={`/courses/${id}`}>
                <h4 className="course--label">Course</h4>
                <h3 className="course--title">{title}</h3>
              </a>
            </div>
          ) 
        })}
      </div>
    );
  }
}

export default Courses;