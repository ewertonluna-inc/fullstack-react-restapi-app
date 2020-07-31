import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

class UserSignIn extends React.Component {
  
  state = {
    emailAddress: '',
    password: '',
    errors: [],
  }
  
  
  render() {
    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <Form
              submitButtonText="Sign In"
              submit={this.submit}
              cancel={this.cancel}
              errors={this.state.errors}
              elements={() => (
                <React.Fragment>
                  <div>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="text"
                      onChange={this.change}
                      className=""
                      placeholder="Email Address"
                      value={this.state.emailAddress}
                    />
                  </div>
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={this.change}
                      className=""
                      placeholder="Password"
                      value={this.state.password}
                    />
                  </div>
                </React.Fragment>
              )}
            />
          </div>
          <p>&nbsp;</p>
          <p>Don't have a user account? <Link to="/signup">Click here</Link> to sign up!</p>
        </div>
      </div>
    );
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  submit = () => {
    const { emailAddress, password } = this.state;
    this.props.signIn(emailAddress, password)
      .then(user => {
        if (user === null) {
          this.setState({errors: ['Sign in was unsuccessful']});
        } else {
          console.log(`SUCCESS! ${emailAddress} is now signed in!`);
          this.props.history.push('/courses');
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push('/error');
      });
  }

  cancel = () => {
    this.props.history.push('/courses')
  }
}


export default UserSignIn;