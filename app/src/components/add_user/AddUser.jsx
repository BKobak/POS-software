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

  {/*function AddUserBtn () {
    
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

  const [user, setUser] = useState([{
    first_name: "",
    last_name: "",
    role: "",
    userId: "",
    PIN: ""
  }]);
  function handleChange (event) {
    const { name, value } = event.target;
    setUser(prevUser => {
      return {
        prevUser,
        [name]: value
      };
    });
  }*/}
  {/*
  const [user, setUser] = useState([{
    first_name: "",
    last_name: "",
    role: "",
    userId: "",
    PIN: ""
  }]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevUser => {
      return {
        prevUser,
        [name]: value
      };
    });
  };

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
  });*/}

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/")
  }

  return(
    <div>
        <div>
          <form action='/add_user' method='POST'>
            <label>First Name</label>
            <input onChange={(e) => {setFirstName(e.target.value)}} type="text" id="forename"/>
            <label>Last Name</label>
            <input onChange={(e) => {setLastName(e.target.value)}} type="text" id="surname"/>
            <label>Role</label>
            <input onChange={(e) => {setRole(e.target.value)}} type="text" id="role"/>
            <label>ID</label>
            <input onChange={(e) => {setUserId(e.target.value)}} type="text" id="id"/>
            <label>PIN</label>
            <input onChange={(e)=> {setPIN(e.target.value)}} type="text" id="pin"/>
            <button onClick={register}>Add User</button>
            <button onClick={goBack}>Back</button>
          </form>
        </div>

    </div>
  )
}
export default AddUser;