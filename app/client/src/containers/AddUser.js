import React, { Component } from 'react'; // Import React and Component from react

// Import styles sheet
import '../assets/css/add_user.css';
// Import AddUser page format from '../components/AddUser/AddUser.jsx'
import AddUser from '../components/add_user/AddUser.jsx';

class AddUserCont extends Component {
  render() { // Render a div with the AddUser component
    return (
      <div className='green-bg'>
        <AddUser />
      </div>
    );
  }
}

export default AddUserCont; // Export the class
