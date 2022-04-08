import React from 'react';
import './App.css';
import Spacex from './components/Spacex/Spacex';
function App() {
  return (
    <div className="App">
      <img src={require('./space-logo-white.png')} className="App-logo" alt="logo" />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="Main-content">
       <Spacex />
      </div>

    </div>
  );
}

export default App;
