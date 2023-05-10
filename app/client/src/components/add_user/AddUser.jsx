import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Axios allows requests to be made to an API
import Axios from 'axios';

function AddUserCont() {

  // Create a function to navigate to a different page.
  const navigate = useNavigate();

  // Create values that can be changed and sent to the database.
  const [values, setValues] = useState();

  // Create a function to automatically update value based on change.
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  // Create a function to handle submit of form info (translated into db).
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/addUser", {
      forename: values.forename,
      surname: values.surname,
      role: values.role,
      id: values.id,
      pin: values.pin,
    }).then((response) => {
      console.log(response);
    });
  };

  const goBack = () => {
    navigate("/");
  }

  return (
    <div className='bb'>
    <Helmet>
      {/* Required meta tags */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      {/* Set the tab title */}
      <title>Welcome!</title>
      {/* Reference the Iconscout CSS Stylesheet */}
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
    </Helmet>
    {/* Initialize the 'Welcome' container */}
    <div className="add-user-container-class">
      <div className="add-user-form">
        <div className="add-user-form-login">
          <span className="h1">ADD USER</span>

          {/* Establish & format user forename textboxes */}
          <form action="#">
            {/* Format the User Forename textbox */}
            <div className="add-user-input-field">
              <input type="text" id="forename" className="form-input" autoComplete="off" placeholder=" " onChange={handleChangeValues} name="forename" required/>
              <label htmlFor="forename" className="form-label">FORENAME</label>
            </div>

            {/* Format the User Surname textbox */}
            <div className="add-user-input-field">
              <input type="text" id="surname" className="form-input" autoComplete="off" placeholder=" " onChange={handleChangeValues} name="surname" required/>
              <label htmlFor="surname" className="form-label">SURNAME</label>
            </div>

            {/* Format the User Role textbox */}
            <div className="add-user-input-field">
              <input id="role" className="form-input" autoComplete="off" placeholder=" " onChange={handleChangeValues} name="role" required/>
              <label htmlFor="role" className="form-label">USER ROLE</label>
            </div>

            {/* Format the User Pin textbox */}
            <div className="add-user-input-field">
              <input id="id" className="password form-input" autoComplete="off" placeholder=" " onChange={handleChangeValues} name="id" required/>
              <label htmlFor="id" className="form-label">ID</label>
            </div>

            {/* Format the User Pin textbox */}
            <div className="add-user-input-field">
              <input type="password" id="pin" className="password form-input" autoComplete="off" placeholder=" " onChange={handleChangeValues} name="pin" required/>
              <label htmlFor="pin" className="form-label">PIN</label>
            </div>

            {/* Form the button that activates a Login */}
            <Link to="/">
              <div className="inline-btn">
              <button className='btn-green' onClick={handleClickButton}>Add User</button>

              </div>
            </Link>

            {/* Form the button that back to the previous page */}
            <div className='inline-btn'>
              <input onClick={goBack} className='btn-green' type="button" value="Back"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AddUserCont;