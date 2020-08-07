import React from 'react';
import './App.css';
import './styles/global.css';

import { 
  BrowserRouter, 
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Connection from './Connection';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header'
import UserSignOut from './components/UserSignOut';
import UpdateCourse from './components/UpdateCourse';
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
  constructor() {
    super();
    this.connection = new Connection();
  }

  state = {
    authenticatedUser: null,
    password: '',
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header authenticatedUser={this.state.authenticatedUser} />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/courses" />} />
            <Route exact path="/courses" component={Courses} />
            <PrivateRoute path="/courses/create" authenticatedUser={this.state.authenticatedUser} connection={this.connection} component={CreateCourse} /> 
            <Route exact path="/courses/:id" render={(props) => <CourseDetail {...props} connection={this.connection} />} />
            <PrivateRoute path="/courses/:id/update" authenticatedUser={this.state.authenticatedUser} connection={this.connection} component={UpdateCourse} />
            <Route path="/signin" render={(props) => <UserSignIn {...props} signIn={this.signIn} />} />
            <Route path="/signout" render={ (props) => <UserSignOut {...props} signOut={this.signOut} /> } />
            <Route path="/signup" render={(props) => <UserSignUp {...props} signIn={this.signIn} connection={this.connection} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  signIn = async (emailAddress, password) => {
      const user = await this.connection.getUser(emailAddress, password);
      if (user !== null) {
        this.setState({authenticatedUser: user});
        this.setState({password});
      }
      return user;
  }

  signOut = () => {
    this.setState({ authenticatedUser: null });
  }

}

export default App;
