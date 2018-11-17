import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import MainBody from './components/mainbody/MainBody';

class App extends Component {
  render() {
    return (
      <div>
          <HeaderComponent />
          <div className="container">
              <MainBody />
          </div>
          
      </div>
    );
  }
}

export default App;
