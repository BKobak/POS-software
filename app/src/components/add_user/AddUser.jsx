import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUser () {
  function AddUserBtn(event){
    event.preventDefault();
    const newUser = {
      firstName: document.getElementById("fname").value, 
      lastName: document.getElementById("lname").value,
      role: document.getElementById("role").value,
      id: document.getElementById("id").value,
      pin: document.getElementById("pin").value 
    }
    axios.post('/create_user', newUser);
    navigate("/");
  }
  const [user, setUser] = useState([{
    firstName: "",
    lastName: "",
    role: "",
    id: "",
    pin: ""
  }]);

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
      
      {user.map((user) => (
        <div>
          <form>
            <label>First Name</label>
            <input type="text" id="fname" name="fname"/>
            <label>Last Name</label>
            <input type="text" id="lname" name="lname" />
            <label>Role</label>
            <input type="text" id="role" name="role" />
            <label>ID</label>
            <input type="text" id="id" name="id" />
            <label>PIN</label>
            <input type="text" id="pin" name="pin" />
            <button onClick={AddUserBtn}>Add User</button>
            <button onClick={goBack}>Back</button>
          </form>
        </div>
      ))}

    </div>
  )
}
export default AddUser;