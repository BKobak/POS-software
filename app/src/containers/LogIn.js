import React, { Component } from 'react'; // Import React and Component from react
// Import styles sheet
import '../assets/css/login.css';
// Import Login page format from '../components/LogIn/LogIn.jsx'
import LogIn from '../components/login/LogIn.jsx';

class LogInCont extends Component {   // Create a class called LogInCont that extends Component
  render() {
    return (
        <div>
          <LogIn />
        </div>
    );
  }
}

export default LogInCont; // Export the class
