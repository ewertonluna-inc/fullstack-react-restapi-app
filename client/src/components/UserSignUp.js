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
    const { connection } = this.props;
    const { firstName, lastName, emailAddress, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState( { errors: ["Password and its confirmation are not a match"]} );
    } else {
      const user = {firstName, lastName, emailAddress, password};
      connection.createUser(user)
        .then(errors => {
          if (errors.length > 0) {
            this.setState({ errors });
          } else {
            // If user was created
            this.props.signIn(emailAddress, password)
              .then(user => {
                if (user === null) {
                  console.log(`User ${emailAddress} sign in failed.`);
                } else {
                  console.log(`SUCCESS! User ${emailAddress} signed in`);
                  // Throws error here and control is passed to the catch() method
                  this.props.history.push('/courses');
                }
              })
              .catch(err => {
                console.warn("Error happened when signing in",err);
                this.props.history.push('/courses');
              });
          }
        })
        .catch(err => {
          console.warn(err)
          this.props.history.push('/errors');
        });
    }
  }

  cancel = () => {
    this.props.history.push('/courses');
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(() => (
      {[name]: value}
    ));
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
                    value={this.state.firstName}
                    onChange={this.change} 
                  />
                </div>
                <div>
                  <input
                    id="lastName" 
                    name="lastName" 
                    type="text" 
                    className="" 
                    placeholder="Last Name" 
                    value={this.state.lastName}
                    onChange={this.change}
                  />
                </div>
                <div>
                  <input
                    id="emailAddress" 
                    name="emailAddress" 
                    type="text" 
                    className="" 
                    placeholder="Email Address" 
                    value={this.state.emailAddress}
                    onChange={this.change}
                  />
                </div>
                <div>
                  <input
                    id="password" 
                    name="password" 
                    type="password" 
                    className="" 
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.change}
                  />
                </div>
                <div>
                  <input
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    className="" 
                    placeholder="Confirm Password" 
                    value={this.state.confirmPassword}
                    onChange={this.change}
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