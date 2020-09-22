import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class FetchBeers extends Component {
  constructor(props){
    super(props);
  state = {
    beerList: []
  }
}

componentDidMount(){
  this.fetchData();
 }
}

fetchData(){

  fetch('https://api.punkapi.com/v2/beers')
  .then(response => response.json())
  .then(parsedJson => console.log(parsedJson.results))
  .catch(error = console.log('parsing failed', error))
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PUNK API BABY
        </p>
       <button>Gimme Beer</button>
      </header>
    </div>
  );
}

export default App;
