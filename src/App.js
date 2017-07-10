import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import Boards from './Boards';
class App extends Component {
  render() {
    return (
      <div className="App">

          <Boards />
          <Auth />
      </div>

    );
  }
}

export default App;
