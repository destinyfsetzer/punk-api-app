import React from 'react';
import FetchBeer from './components/FetchBeer';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            -- PUNK API BABY --
        </h1>
        < FetchBeer />
      </header>
    </div>
  );
}

export default App;
