import React from 'react';

// Create a context for the toggle
const ToggleContext = React.createContext({
  toggleValue: false,
  setToggleValue: () => {},
});

export default ToggleContext;