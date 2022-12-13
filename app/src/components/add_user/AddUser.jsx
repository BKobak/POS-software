import React from 'react';

function AddUser () {
  return(
  <div>
    <h1>Add New User</h1>
    <div>
      <label htmlFor="fname">First name:</label>
      <input className="input-window" type="text" id="fname" name="fname"/><br></br>
      <label htmlFor="lname">Last name:</label>
      <input className="input-window" type="text" id="lname" name="lname"/><br></br>
      <label htmlFor="lname">User role:</label>
      <select className="form-select" id="lname" name="lname">
        <option defaultValue>Select role</option>
        <option value="1">Manager</option>
        <option value="2">Supervisor</option>
        <option value="3">Barista</option>
      </select><br></br>
      <label htmlFor="id">User ID:</label>
      <input className="input-window" type="text" id="id" name="id"/><br></br>
      <label htmlFor="pin">PIN:</label>
      <input className="input-window" type="text" id="pin" name="pin"/><br></br>

      <button type="button" className="btn btn-light">Add User</button>
      <button type="button" className="btn btn-light">Back</button>
    </div>

  </div>
  )
}
export default AddUser;