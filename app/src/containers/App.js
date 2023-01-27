import React, { Component } from 'react'; // Import React and Component from react
import { HashRouter as Router, Route, Routes} from "react-router-dom"; // Import Router, Route, and Routes from react-router-dom
import AddUserCont from './AddUser'; // Import AddUserCont from './AddUser'
import LogInCont from './LogIn'; // Import LogInCont from './LogIn'
import DisplayCont from './Display'; // Import DisplayCont from './Display'
import mysql from 'mysql'; // Import mysql from mysql
import express from 'express'; // Import express from express

class App extends Component {
  
  render() {

  // Create express app
  const app = express()
  const newapp = app.use(express.json());
  // Set port
  const port = 3306;

  // Create connection
  const connection = mysql.createConnection({
      host: 'localhost',
      db: 'pos',
      user: 'root',
  });

  newapp.post('/create_user', async function(req, res) {

    const forename = req.body.firstName;
    const surname = req.body.lastName;
    const role = req.body.role;
    const id = req.body.id;
    const pin = req.body.pin;

    connection.query('INSERT INTO users (forename, surname, role, id, pin) VALUES (?,?,?,?,?)', [req.body.forename, req.body.surname, req.body.role, req.body.id, req.body.pin], function (error, results, fields) {  
      if (error) throw error;
    });
  });

  // Listen to port
  newapp.listen(port, () => {
      console.log('Server is running on port: ' + port + '.');
  });

  {/*app.get('/add_user', async function(req, res) {
      const first_name = req.body.firstName;
      const last_name = req.body.lastName;
      const role = req.body.role;
      const userId = req.body.id;
      const PIN = req.body.pin;

      // Create new user
      const newUser = new User({first_name, last_name, role, userId, PIN});

      // Save user to database
      newUser.save()
          .then(() => res.json('User added!'))
          .catch(err => res.status(400).json('Error: ' + err));
  });*/}

    return (
      // Add Router component
      <Router>
        <Routes>
          {/* Add route to LogIn page */}
          <Route path="/" exact element={<LogInCont/>} />
          {/* Add route to AddUser page */}
          <Route path="/adduser" exact element={<AddUserCont/>} />
          {/* Add route to Display page */}
          <Route path="/display" exact element={<DisplayCont/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
