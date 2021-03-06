import React, { Component } from 'react';
import logo from '../logo.svg';
import ComponentA from './ComponentA'
import ComponentOne from './_ComponentOne'
import './App.css';

class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      title: 'Current Title',
      count: 0
    }
  }
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Local State Example</h2>
        </div>

        <div className='wrapper'>

          <div className='sidebar'>
            <ComponentOne />
          </div>

          <div className='content'>
            <p className="App-intro">
              Lets learn some redux
            </p>
            <ComponentA />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
