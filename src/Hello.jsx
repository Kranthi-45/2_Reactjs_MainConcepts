import React from 'react';

/// if you wont import above React it will throw error becoz below component creation by default uses React.createElement only in background

function Hello(props) { 
   return <h1> Hi {props.name} Kranthi</h1>;
}

// above is normal function & below using arrow function - both are same
// export const Hello = (props) => {
//     return <h1> Hi {props.name} Kranthi</h1>;
// };

function NewHello(props) {                         // creating functional comp using function keyword
    return <h1> Hi New  {props.name} Kranthi this is new</h1>;
}

// export const NewHello = (props) => {            // creating functional comp using arrow func
//     return <h1> Hi New  {props.name} Kranthi this is new</h1>;
// };

export { Hello, NewHello }                     // exporting multiple comp at one place