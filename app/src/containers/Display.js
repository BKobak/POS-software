import React, { Component } from 'react'; // Import React and Component from react
// Import styles sheet
import '../assets/css/display.css';
// Import Display page format from '../components/Display/Display.jsx'
import Display from '../components/display/Display.jsx';

class DisplayCont extends Component {
  render() {  // Render a div with the Display component
    return (
      <div>
        <Display/>
      </div>
    );
  }
}

export default DisplayCont;   // Export the class