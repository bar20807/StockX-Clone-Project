import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { hydrateRoot } from 'react-dom/client'

/*ReactDOM.render(
  <App/>,
  document.getElementById('root')
);*/

const container = document.getElementById('root')
hydrateRoot(container, <App />)

