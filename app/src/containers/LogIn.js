import React, { Component } from 'react';
// Import styles sheet
import '../assets/css/login.css';
// Import Login page format from '../components/LogIn/LogIn.jsx'
import LogIn from '../components/login/LogIn.jsx';
import AddUserCont from './AddUser.js';
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
