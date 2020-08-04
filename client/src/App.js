import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Connection from './Connection';
import './App.css';
import './styles/global.css';

import Courses from './components/Courses';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header'
import UserSignOut from './components/UserSignOut';

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
          <Header authenticatedUser={this.state.authenticatedUser} />
          <Route path="/courses" component={Courses} />
          <Route path="/signin" render={(props) => <UserSignIn {...props} signIn={this.signIn} />} />
          <Route path="/signout" render={ (props) => <UserSignOut authenticatedUser={this.state.authenticatedUser} signOut={this.signOut} /> } />
          <Route path="/signup" render={(props) => <UserSignUp {...props} signIn={this.signIn} connection={this.connection} />} />
          <Route path="/createcourse" render={(props) => <CreateCourse {...props} authenticatedUser={this.state.authenticatedUser} connection={this.connection} />} />
        </BrowserRouter>
      </div>
    );
  }

  signIn = async (emailAddress, password) => {
      const user = await this.connection.getUser(emailAddress, password);
      if (user !== null) {
        this.setState({authenticatedUser: user});
      }
      return user;
  }

  signOut = () => {
    this.setState({ authenticatedUser: null });
  }

}

export default App;
