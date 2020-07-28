import React from 'react';
import './App.css';
import './styles/global.css';

import Courses from './components/Courses';

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <Courses />
      </div>
    );
  }
}

export default App;
