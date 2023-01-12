import React, { Component } from 'react';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import AddUserCont from './AddUser';
import LogInCont from './LogIn';
import DisplayCont from './Display';


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          
          <Route path="/" exact element={<LogInCont/>} />
          
          <Route path="/adduser" exact element={<AddUserCont/>} />

        </Routes>
      </Router>
    );
  }
}

export default App;
