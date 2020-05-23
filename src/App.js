import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { // only component inherited components can have state
  state = {  //vWhen state is changed, React re-renders DOM
    persons: [
      { id: "uniqueId1", name: "Max", age: 28 },
      { id: "uniqueId2", name: "Manu", age: 29 },
      { id: "uniqueId3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id; //Return true or false
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

// Handler is used to indicate a method not actively being called but assigning as an event handler.
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice //Slice with 0 args simply copies array
    const persons = [...this.state.persons]; //Copy array with spread to ensure object remains immutable
    persons.splice(personIndex, 1); //Removes 1 element from array starting at personIndex
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8x",
      cursor: "pointer"
    };
    
    // Dynamic Content 
    let persons = null; //Default no list of people until populated below.

    if (this.state.showPersons) {
      persons = ( //Dynamic Listing of X elements
        <div>          {/* Map accepts 2 arg. 1, each element name, 2 index */}
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                key={person.id /* Do not use index as it changes frequently w/ updated data */}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          )})}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
