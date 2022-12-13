import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from "react-router-dom";
import AddUserCont from './AddUser';
import '../assets/css/app.css';

import LogInCont from './LogIn';

class App extends Component {
  render() {
    return (
      <AddUserCont />
    );
  }
}

export default App;
