import React from 'react';
import './style.css';
import Header from './Header';
import Body from './Body';
import Foot from './Footer';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
      <Foot/>
    </div>
  )
}
export default App;