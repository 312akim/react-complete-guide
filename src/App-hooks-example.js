import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
    // only component inherited components can have state
    //React Hooks for functional state. 2 arguments [ state, stateChanger ]
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 29 },
            { name: "Stephanie", age: 26 },
        ],
    });

    const [otherState, setOtherState] = useState("Some other value");

    const switchNameHandler = () => {
        setPersonsState({
            // In Hooks, replaces old state, not merge. "otherState" no longer exists once switchNameHandler is run if not manually defined in another useState()
            persons: [
                // React Hooks is used to make state's modular.
                { name: "Maximilian", age: 28 },
                { name: "Manu", age: 29 },
                { name: "Stephanie", age: 27 },
            ],
            otherState: personsState.otherState,
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
                My Hobbies: Racing
            </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
};

export default App;
