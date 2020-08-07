import React from 'react';
import { Link } from 'react-router-dom';

class CourseDetail extends React.Component {
  
  state = {
    course: null
  }

  componentDidMount() {
    const { connection, match } = this.props;
    connection.getCourse(match.params.id)
      .then(data => {
        if (data.course) {
          this.setState({ course: data.course });
        }
      })
      .catch(err => console.warn('Error while fetching course:', err));
    
  }

  render() {
    if (this.state.course) {
      const { id, title, courseUser, description, estimatedTime, materialsNeeded } = this.state.course;
      const { authenticatedUser } = this.props;
      let updateAndDeleteLinks = null;

      if (authenticatedUser && authenticatedUser.id === this.state.course.courseUser.id) {
        updateAndDeleteLinks = <React.Fragment><Link className="button" to={`/courses/${id}/update`}>Update Course</Link><Link className="button" to="#">Delete Course</Link></React.Fragment>;
      }
      
      return (
        <div>
          <div className="actions--bar">
            <div className="bounds">
              <div className="grid-100"><span>{updateAndDeleteLinks}</span>
                <Link className="button button-secondary" to='/courses'>Return to List</Link>
              </div>
            </div>
          </div>
  
          <div className="bounds course--detail">
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <h3 className="course--title">{title}</h3>
                <p>{`By ${courseUser.firstName} ${courseUser.lastName}`}</p>
              </div>
              <div className="course--description">
                {description.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            </div>
  
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <h3>{estimatedTime ? estimatedTime : 'No information'}</h3>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <ul>
                      { materialsNeeded 
                        ?
                        materialsNeeded.split('\n').map((material, index) => material ? <li key={index}>{material}</li> : null)
                        :
                        <li>No information</li> }
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <h2>No Course Found</h2>
        </React.Fragment>
      );
    }
    
  }
}

export default CourseDetail;