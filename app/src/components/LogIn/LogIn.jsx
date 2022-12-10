import React from 'react';
import {Link} from "react-router";

function LogIn () {
  return(
  <div>
    <h1>Welcome</h1>
    <div className="login-bg">
      <h2>Log In</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      </svg>
      <label htmlFor="id">User ID:</label>
      <input type="text" id="id" name="id"/><br></br>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi-lock-fill" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg>
      <label htmlFor="pin">PIN:</label>
      <input type="text" id="pin" name="pin"/><br></br>
      <a className="btn" href='../HomePage'>Log In</a>
    </div>
    <div className='centered'>
      <a className="btn" href='../AddUser'>Add New User</a>
    </div>

  </div>
  )
}
export default LogIn;