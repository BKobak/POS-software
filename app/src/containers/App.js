import React, { Component } from 'react';

import '../assets/css/app.css';

import LogIn from '../components/App/HomePage.jsx';

class App extends Component {
  render() {
    return (
        <div className='dark-bg'>
          <div className='green-bg'>
            <LogIn />
          </div>
        </div>
    );
  }
}

export default App;
