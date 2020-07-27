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
    return (
      <div className="bounds">
        {/* Render each course here */}
      </div>
    );
  }
}

export default Courses;