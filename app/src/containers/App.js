import React, { Component } from 'react'; // Import React and Component from react
import { HashRouter as Router, Route, Routes} from "react-router-dom"; // Import Router, Route, and Routes from react-router-dom
import AddUserCont from './AddUser'; // Import AddUserCont from './AddUser'
import LogInCont from './LogIn'; // Import LogInCont from './LogIn'
import DisplayCont from './Display'; // Import DisplayCont from './Display'


class App extends Component {
  render() {
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
