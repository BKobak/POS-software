import React, { Component } from 'react';

import '../assets/css/app.css';

import LogIn from '../components/LogIn/LogIn.jsx';

class LogInCont extends Component {
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

export default LogInCont;
