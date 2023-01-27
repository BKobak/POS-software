import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUser () {

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState('');
  const [PIN, setPIN] = useState('');

  const register = () => {
    axios.post('http://localhost:3306/add_user', {
      forename: forename,
      surname: surname,
      role: role,
      id: id,
      pin: pin
    }
    ).then((response) => {
      console.log(response);
    });
  };

  {/*
  function AddUserBtn () {
    
    const user = {
      first_name: document.getElementById('first_name').value,
      last_name: document.getElementById('last_name').value,
      role: document.getElementById('role').value,
      userId: document.getElementById('userId').value,
      PIN: document.getElementById('PIN').value,
    };
    adduser_query = 'INSERT INTO users (first_name, last_name, role, userId, PIN) VALUES (' + user.first_name + ', ' + user.last_name + ', ' + user.role + ', ' + user.userId + ', ' + user.PIN + ')';
    connection.query(adduser_query, (err, results, fields) => {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
  }

  function handleChange (event) {
    const { name, value } = event.target;
    setUser(prevUser => {
      return {
        prevUser,
        [name]: value
      };
    });
  }

*/}

  const [user, setUser] = useState([{
    first_name: "",
    last_name: "",
    role: "",
    userId: "",
    PIN: ""
  }]);
  
  

  function AddUserBtn(event){
    event.preventDefault();
    const newUser = {
      firstName: document.getElementById("first_name").value, 
      lastName: document.getElementById("last_name").value,
      role: document.getElementById("role").value,
      id: document.getElementById("userId").value,
      pin: document.getElementById("PIN").value 
    }
    axios.post('cluster0-shard-00-02.iovn5.mongodb.net:27017/create_user', newUser);
    navigate("/");
  }

  useEffect(() => {
    fetch("/create_user").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setUser(jsonRes));
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/")
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
                <input onChange={(e) => {setFirstName(e.target.value)}} type="text" id="forename" className="form-input" autoComplete="off" placeholder=" " required/>
                <label htmlFor="fname" className="form-label">FIRST NAME</label>
              </div>

              {/* Format the User Last Name textbox */}
              <div className="add-user-input-field">
                <input onChange={(e) => {setFirstName(e.target.value)}} type="text" id="surname" className="form-input" autoComplete="off" placeholder=" " required/>
                <label htmlFor="lname" className="form-label">LAST NAME</label>
              </div>

              {/* Format the User Role textbox */}
              <div>
                <select onChange={(e) => {setFirstName(e.target.value)}} className="form-select" id="role">
                  <option defaultValue>Select role</option>
                  <option value="1">Manager</option>
                  <option value="2">Supervisor</option>
                  <option value="3">Barista</option>
                </select>
              </div>

              {/* Format the User Pin textbox */}
              <div className="add-user-input-field">
                <input onChange={(e) => {setFirstName(e.target.value)}} type="password" id="pin" className="password form-input" autoComplete="off" placeholder=" " required/>
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
          <div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default AddUser;