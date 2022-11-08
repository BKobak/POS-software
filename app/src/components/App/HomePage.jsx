import React from 'react';

function LogIn () {
  return(
  <div>
    <h1>Welcome</h1>
    <div class="login-bg">
      <h2>Log In</h2>
      <label for="id">User ID:</label>
      <input type="text" id="id" name="id"/><br></br>
      <label for="pin">PIN:</label>
      <input type="text" id="pin" name="pin"/><br></br>
      <a className="btn" href='../HomePage'>Log In</a>
    </div>
    <div className='centered'>
      <a className="btn" href='app/src/containers/add_user.js'>Add New User</a>
    </div>

  </div>
  )
}
export default LogIn;