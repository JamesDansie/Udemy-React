import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../componenets/Persons/Persons';
import Cockpit from '../componenets/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js [constructor]');

  }

  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: 28 },
      { id: 'sdfg', name: 'Manu', age: 29 },
      { id: 'qwer', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: true
  };

  static getDerivedStateFromProps(props, state){
    console.log('App.js, [getDerivedStateFromProps]', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js componenetDidMount');
  }

  deletePersonHandler = (personIndex) => {
    // two ways of making a new array, rather than pointing to the old array.
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // makes a copy of the person at that index
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('App.js [render]')

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title = {this.props.appTitle}
            showPersons={this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler}
          />
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
