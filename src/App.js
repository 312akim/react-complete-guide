import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { // only component inherited components can have state
  state = {  //vWhen state is changed, React re-renders DOM
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  }
// Handler is used to indicate a method not actively being called but assigning as an event handler.
  switchNameHandler = () => {
    console.log("Was clicked!")
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
