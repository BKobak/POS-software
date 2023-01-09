import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from "react-router-dom";
import AddUserCont from './AddUser';
import LogInCont from './LogIn';
import DisplayCont from './Display';

class App extends Component {
  render() {
    return (
      <DisplayCont />
      //<LogInCont />
    );
  }
}

export default App;
