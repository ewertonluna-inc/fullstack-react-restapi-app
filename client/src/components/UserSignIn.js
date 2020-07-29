import React from 'react';
import Form from '../components/Form';

class UserSignIn extends React.Component {
  
  state = {
    emailAddress = '',
    password = '',
    errors = []
  }
  
  
  render() {
    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <Form
              submitTextButton="Sign In"
              submit={this.submit}
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
                      defaultValue
                    />
                  </div>
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={this.change}
                      className
                      placeholder="Password"
                      defaultValue
                    />
                  </div>;
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </div>
    );
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  submit() {
    const { emailAddress, password } = this.state;
    this.props.signIn(emailAddress, password)
      .then(user => {
        if (user === null) {
          this.setState({errors: ['Sign in was unsuccessful']});
        } else {
          this.props.history.push('/authenticated');
          console.log(`SUCCESS! ${emailAddress} is now signed in!`);
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push('/error');
      });
  }


}