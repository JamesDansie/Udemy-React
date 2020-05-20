import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'James', age: 32},
      { name: 'Max', age: 28},
      { name: 'Ron', age: 78}
    ],
  });

  const [ otherState, setOtherState ] = useState('blah!');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // in hooks, state overrides. In class it just updates
    setPersonsState({
      persons: [
        { name: 'Jimmah', age: 32},
        { name: 'Max', age: 28},
        { name: 'Ron', age: 68}
      ]
    });
  }
  
    return (
      <div className="App">
        <h1>
          Hi! This is a react app
        </h1>
        <p>this is actually working :D</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
      );

      // what jsx gets compiled into.
      // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi this is an h1!'));
  
}

export default app;