import { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react';

import AuthContext from "../../context/AuthProvider";
import axios from 'axios';

// Define the LogIn function.
function LogIn() {
  // Create a variable to navigate to other pages.
    const navigate = useNavigate();

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [id, setId] = useState('');
    const [pin, setPin] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [id, pin])
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await axios.post('http://localhost:3001/login', { id, pin }, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ id, pin, roles, accessToken });
            setId('');
            setPin('');
            setSuccess(true);
        } catch (err) {
            if (err.response?.status === 400) {
                setErrMsg('Missing ID or PIN');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

  
  return (
    <>
      {success ? (
          <Redirect to="http://localhost:3001/display" />
      ) : (

        <div className='bb'>
          <Helmet>
            {/* Required meta tags */}
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            {/* Set the tab title */}
            <title>Log In</title>
            {/* Reference the Iconscout CSS Stylesheet */}
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
          </Helmet>
          {/* Initialize the 'Welcome' container */}
          <div className="container">
            <div className="form">
              <div className="form-login">
                <span className="title">WELCOME!</span>

                {/* Display error message if authentication failed */}
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                {/* Establish & format user textboxes */}
                <form onSubmit={handleSubmit} method='POST'>
                  {/* Format the User ID textbox */}
                  <div className="input-field">
                    <input 
                      type="text" 
                      id="id"
                      ref={userRef}
                      className="form-input" 
                      autoComplete="off" 
                      placeholder=" "
                      name="id" 
                      onChange={(e) => setId(e.target.value)}
                      value={id}
                      required
                    />
                    <label htmlFor="id" className="form-label">YOUR ID</label>
                    <i className="uil uil-user icon"></i>
                  </div>

                  {/* Format the User Pin textbox */}
                  <div className="input-field">
                    <input 
                      type="password" 
                      id="pin" 
                      className="password form-input" 
                      autoComplete="off"
                      placeholder=" " 
                      name="pin" 
                      onChange={(e) => setPin(e.target.value)}
                      value={pin}
                      required
                    />
                    <label htmlFor="pin" className="form-label">YOUR PIN</label>
                    <i className="uil uil-lock-alt icon"></i>
                  </div>
                  {/* Form the button that activates a Login */}
                  <div>
                    <button className="btn-green login" onClick={handleSubmit} type="submit">Login</button>
                  </div>
                </form>

                {/* Provide a link to a new form for User Registry */}
                <div className="register-new-user">
                  <span className="text">New User?&nbsp;
                    <Link to="/addUser">
                        <a className="text register-text">Register New User</a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 


export default LogIn;