import React from 'react';

const ToggleContext = React.createContext({
  toggleValue: false,
  setToggleValue: () => {},
});

export default ToggleContext;