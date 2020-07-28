import React from 'react';

class CourseDetail extends React.Component {
  state = {
    
  }

  render() {

    return (
      <div>

        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100"><span><a className="button" href={/* TODO: add course update route*/}>Update Course</a><a className="button" href="#">Delete Course</a></span>
              <a className="button button-secondary" href="/courses">Return to List</a>
            </div>
          </div>
        </div>

        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{/* TODO: add title variable */}</h3>
              <p>{/*TODO: add template literal `By ${courseUser.firstName} ${courseUser.lastName}`*/}</p>
            </div>
            <div className="course--description">
              {/* TODO:
                Render <p> tags for each description paragraph. Example:
                <p>
                  High-end furniture projects are great to dream about. But unless you have a
                  well-equipped shop and some serious woodworking experience to draw on, it
                  can be difficult to turn the dream into a reality.
                </p>
                <p>
                  Not every piece of furniture needs to be a museum showpiece, though. Often a
                  simple design does the job just as well and the experience gained in
                  completing it goes a long way toward making the next project even better.
                </p>
              */}
            </div>;
          </div>

          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{/* TODO: add estimatedTime */}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    {/* TODO: add each material needed in a <li> tag */}
                    <li>1/2 x 3/4 inch parting strip</li>
                    <li>1 x 2 common pine</li>
                    <li>1 x 4 common pine</li>
                    <li>1 x 10 common pine</li>
                    <li>1/4 inch thick lauan plywood</li>
                    <li>Finishing Nails</li>
                    <li>Sandpaper</li>
                    <li>Wood Glue</li>
                    <li>Wood Filler</li>
                    <li>Minwax Oil Based Polyurethane</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>;


        </div>

      </div>
    );
  }
}