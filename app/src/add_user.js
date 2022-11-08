import React from 'react';
import { render } from 'react-dom';
import new_user_data from './containers/new_user_data';

// Render our application into it
render( <new_user_data />, document.getElementById('add_user') );