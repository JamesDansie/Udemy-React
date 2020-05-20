import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hi! This is a react app
        </h1>
        <p>this is actually working :D</p>
        <Person />
      </div>
      );

      // what jsx gets compiled into.
      // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi this is an h1!'));
  }
}

export default App;
