import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser () {

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/")
  }

  const AddUserBtn =() => {
    //...
    navigate("/");
  }
    


  return(
    <div>
      {/* Initialize the container*/}
      <div className="add-user-container-class">
        <div className="add-user-form">
          <div className="add-user-form-login">
            <h1 className='h1'>Add New User</h1>

              {/* Format the User First Name textbox */}
              <div className="add-user-input-field">
                <input type="text" id="fname" className="form-input" autoComplete="off" placeholder=" " required/>
                <label htmlFor="fname" className="form-label">FIRST NAME</label>
              </div>

              {/* Format the User Last Name textbox */}
              <div className="add-user-input-field">
                <input type="text" id="lname" className="form-input" autoComplete="off" placeholder=" " required/>
                <label htmlFor="lname" className="form-label">LAST NAME</label>
              </div>

              {/* Format the User Role textbox */}
              <div>
                <select className="form-select" id="role">
                  <option defaultValue>Select role</option>
                  <option value="1">Manager</option>
                  <option value="2">Supervisor</option>
                  <option value="3">Barista</option>
                </select>
              </div>

              {/* Format the User Pin textbox */}
              <div className="add-user-input-field">
                <input type="password" id="pin" className="password form-input" autoComplete="off" placeholder=" " required/>
                <label htmlFor="pin" className="form-label">YOUR PIN</label>
              </div>
              
              {/* Form the button that creates new user */}
              <div className='inline-btn'>
                  <input onClick={AddUserBtn} className='btn-green' type="button" value="Add User"/>
              </div>
              {/* Form the button that back to the previous page */}
              <div className='inline-btn'>
                  <input onClick={goBack} className='btn-green' type="button" value="Back"/>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default AddUser;