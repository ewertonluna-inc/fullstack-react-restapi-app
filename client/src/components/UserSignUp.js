import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

class UserSignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    errors: [],
  }

  submit = () => {
    const { firstName, lastName, emailAddress, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState( { errors: ["Password and its confirmation are not a match"]} );
    } else {
      // TODO: Finish this method using the createUser() method
    }
  }

  cancel = () => {
    this.props.history.push('/courses');
  }

  render() {
    return (
      <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign Up</h1>
        <div>
          <Form 
            errors={this.state.errors}
            submitButtonText="Sign Up"
            submit={this.submit}
            cancel={this.cancel}
            elements={() => (
              <React.Fragment>
                <div>
                  <input
                    id="firstName" 
                    name="firstName" 
                    type="text" className="" 
                    placeholder="First Name" 
                    value="" 
                  />
                </div>
                <div>
                  <input
                    id="lastName" 
                    name="lastName" 
                    type="text" 
                    className="" 
                    placeholder="Last Name" 
                    value=""
                  />
                </div>
                <div>
                  <input
                    id="emailAddress" 
                    name="emailAddress" 
                    type="text" 
                    lassName="" 
                    placeholder="Email Address" 
                    value=""
                  />
                </div>
                <div>
                  <input
                    id="password" 
                    name="password" 
                    type="password" 
                    className="" 
                    placeholder="Password" 
                    value=""
                  />
                </div>
                <div>
                  <input
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    className="" 
                    placeholder="Confirm Password" 
                    value=""
                  />
                </div>
              </React.Fragment>
            )}
          />
        </div>
        <p>&nbsp;</p>
        <p>Already have a user account? <Link to="/signin">Click here</Link> to sign in!</p>
      </div>
    </div>
    );
  }
}

export default UserSignUp;