import React, { Component } from 'react';

import '../assets/css/App.css';

import LogIn from '../components/App/HomePage.jsx';

class App extends Component {
  render() {
    return (
      <div bg-color='#27251F'>
        <div class='green-bg'>
          <LogIn />
        </div>
      </div>
    );
  }
}

export default App;
