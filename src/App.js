import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
const word = "Hello";


class App extends Component {
  render() {
    return (
      <div  className="App" >
     <WordCard value="hello"/>
      
      </div>
    );
  }
}

export default App;
