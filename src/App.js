import React, { Component } from 'react';
import './App.css';
import Savedata from './components/Savedata';
import Textsave from './components/Textsave';

class App extends Component {

  render() {
    return (
      <div>
        <Textsave />

        <Savedata />

      </div>
    );
  }
}

export default App;
