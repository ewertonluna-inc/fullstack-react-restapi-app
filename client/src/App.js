import React from 'react';
import Connection from './Connection';
import './App.css';
import './styles/global.css';

import Courses from './components/Courses';

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
        <Courses />
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
