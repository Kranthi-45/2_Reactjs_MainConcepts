import React from 'react';

/** combination of default component & named component */

export default function Hello(props){
    return <h1> Hi  {props.name} this is default compoent/function</h1>;
}

//-------------------------------------------------------------------------------------------
export const NewHello = (props) => {
    return <h1> Hi {props.name} this is new Hello</h1>;
};

//-------------------------------------------------------------------------------------------

// Below is another of creating default component using class based syntax

// we use this.props becoz we are calling props of this object of the class  
// extends to React.component becoz class need to convert to component , & uses render() to convert to jsx to render on browser
// export default class extends React.Component {
//     render(){
//     return <h1> Hi  {this.props.name} this is class based compoent </h1>;
//     }
// }

//-------------------------------------------------------------------------------------------
