import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Connection from './Connection';
import './App.css';
import './styles/global.css';

import Courses from './components/Courses';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';

class App extends React.Component {
  constructor() {
    super();
    this.connection = new Connection();
  }

  state = {
    authenticatedUser: null,
  }
  
  render() {
    return (
      <div>
      <BrowserRouter>
        <Route path="/courses" component={Courses} />
        <Route path="/signin" render={() => <UserSignIn signIn={this.signIn} />} />
        <Route path="/signup" render={() => <UserSignUp connection={this.connection}/>} />
      </BrowserRouter>
      </div>
    );
  }

  signIn = async (emailAddress, password) => {
      const user = await this.connection.getUser(emailAddress, password);
      this.setState({authenticatedUser: user});
      return user;
  }

  signOut = () => {

  }

}

export default App;
