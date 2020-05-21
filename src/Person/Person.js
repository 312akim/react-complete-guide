import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> {/* Let's you display elements of the custom component ie "My Hobbies: Racing" */}
        </div>
    );
};

export default person;