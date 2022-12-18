import React, { Component } from 'react';
// Import styles sheet
import '../assets/css/login.css';
// Import Login page format from '../components/LogIn/LogIn.jsx'
import LogIn from '../components/LogIn/LogIn.jsx';

class LogInCont extends Component {
  render() {
    return (
        <div>
          <LogIn />
        </div>
    );
  }
}

export default LogInCont;
