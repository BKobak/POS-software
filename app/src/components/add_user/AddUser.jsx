import React from 'react';

function AddUser () {
  return(
  <div>
    <h1>Hello</h1>
    <div class="login-bg">
      <h2>Add New User</h2>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"/><br></br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"/><br></br>
      <label for="id">User ID:</label>
      <input type="text" id="id" name="id"/><br></br>
      <label for="pin">PIN:</label>
      <input type="text" id="pin" name="pin"/><br></br>
    </div>

  </div>
  )
}
export default AddUser;