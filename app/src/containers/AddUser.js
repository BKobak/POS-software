import React, { Component } from 'react';

import '../assets/css/add_user.css';
import AddUser from '../components/add_user/AddUser.jsx';

class AddUserCont extends Component {
  render() {
    return (
      <div className='green-bg'>
        <AddUser />
      </div>
    );
  }
}

export default AddUserCont;
