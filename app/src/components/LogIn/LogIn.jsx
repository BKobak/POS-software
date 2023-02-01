import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  // Create variables/states that can be changed and sent to the database.
  const [values, setValues] = useState();

  // Create a function that will handle the change in values.
  const handleChangeValue = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  // Create a function that will handle the click of the button.
  const handleClickButton = () => {
    Axios.post('http://localhost:3001/login', {
      userID: values.userID,
      userPin: values.userPin,
    }).then((response) => {
      console.log(response);
    });
    // Navigate to the Display page.
    navigate("/display");
  };


  const navigate = useNavigate();

  const toAddUser = () => {
    navigate("/adduser")
  }

  function pinIconClick() {
    // Initialize variables
    const pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password");
    
    // JS code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon => {
      eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
          // Change from hidden mode to view mode.
          if(pwField.type === "password"){
            pwField.type = "text";
            
            // Replace the 'EyeSlash' Icon with the 'Eye' Icon
            pwShowHide.forEach(icon => {
              icon.classList.replace("uil-eye-slash", "uil-eye");
            })
          }else{
            // Change from view mode to hidden mode
            pwField.type = "password";
            // Replace the 'Eye' Icon with the 'EyeSlash' Icon
            pwShowHide.forEach(icon => {
              icon.classList.replace("uil-eye", "uil-eye-slash");
            })
          }
        })
      })
    })

  }
  // Create variables/states that can be changed and sent to the database.
  const [userID, setUserID] = useState("");
  const [userPin, setUserPin] = useState("");


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
      <div className="container">
        <div className="form">
          <div className="form-login">
            <span className="title">WELCOME!</span>

            {/* Establish & format user textboxes */}
            <form action="#">
              {/* Format the User ID textbox */}
              <div className="input-field">
                <input type="text" id="id" className="form-input" autoComplete="off" placeholder=" " onChange={handleChangeValue} name="userID" required/>
                <label htmlFor="id" className="form-label">YOUR ID</label>
                <i className="uil uil-user icon"></i>
              </div>

              {/* Format the User Pin textbox */}
              <div className="input-field">
                <input type="password" id="pin" className="password form-input" autoComplete="off" placeholder=" " onChange={handleChangeValue} name="userPin" required/>
                <label htmlFor="pin" className="form-label">YOUR PIN</label>
                <i className="uil uil-lock-alt icon"></i>
                <i className="uil uil-eye-slash showHidePw"></i>
              </div>

              {/* Form the button that activates a Login */}
              <div className="input-field button">
                <input type="submit" onClick={handleClickButton} value="Login Now"/>
              </div>
            </form>

            {/* Provide a link to a new form for User Registry */}
            <div className="register-new-user">
              <span className="text">New User?&nbsp;
                <a onClick={toAddUser} className="text register-text">Register New User</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default LogIn;