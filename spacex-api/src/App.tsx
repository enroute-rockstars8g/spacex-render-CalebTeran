import React from 'react';
import './App.css';
import Spacex from './components/Spacex/Spacex';
function App() {
  return (
    <div className="App">
      <div className="Main-content">
      <img src={require('./space-logo-white.png')} className="App-logo" alt="logo" />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <Spacex />
      </div>
    </div>
  );
}

export default App;
