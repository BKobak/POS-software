import React from 'react';

function AddUser () {
  return(
    <div>
      
      {/* Initialize the container*/}
      <div className="container-class">
        <div className="form">
          <div className="form-login">
            <h1 className='h1'>Add New User</h1>

              {/* Format the User First Name textbox */}
              <div className="input-field">
                <input type="text" id="fname" className="form-input" autoComplete="off" placeholder=" " required/>
                <label htmlFor="fname" className="form-label">FIRST NAME</label>
                <i className="uil uil-user icon"></i>
              </div>

              {/* Format the User Last Name textbox */}
              <div className="input-field">
                <input type="text" id="lname" className="form-input" autoComplete="off" placeholder=" " required/>
                <label htmlFor="lname" className="form-label">LAST NAME</label>
                <i className="uil uil-lock-alt icon"></i>
              </div>

              {/* Format the User Role textbox */}
              <div>
                <select className="form-select" id="role">
                  <option defaultValue>Select role</option>
                  <option value="1">Manager</option>
                  <option value="2">Supervisor</option>
                  <option value="3">Barista</option>
                </select>
                <i className="uil uil-lock-alt icon"></i>
              </div>

              {/* Format the User Pin textbox */}
              <div className="input-field">
                <input type="password" id="pin" className="password form-input" autoComplete="off" placeholder=" " required/>
                <label htmlFor="pin" className="form-label">YOUR PIN</label>
                <i className="uil uil-lock-alt icon"></i>
                <i className="uil uil-eye-slash showHidePw" onClick={() => pinIconClick()}></i>
              </div>

              {/* Form the button that creates new user */}
              <div className="input-field button">
                  <input type="button" value="Add User"/>
              </div>
              {/* Form the button that back to the previous page */}
              <div className="input-field button">
                  <input type="button" value="Back"/>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default AddUser;