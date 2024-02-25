import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';

// import * as HelloObject from "./Hello.jsx"
// import {Hello, NewHello} from "./Hello.jsx"  

/** Above 2 imports stmts are  */

// import SomeHello,{NewHello} from "./Hello1.jsx"      

/** Above import for default, named components seperately  */

//------------>>>> starts here--------------------
//----------------------------------------------------------------------------------------------

// ReactDOM.render(<h1>Helloworld React!</h1>, document.getElementById('root'));

//---------------------------------------------------------------------------------------------------
//same
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <h1>Hello, world2!</h1>;
// root.render(element);

//--------------------------------------------------------------------------------------------------  
// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(<h1>Hello, world3!</h1>); 

//---------------------------------------------------------------------------------------------------

//** Traditional syntax */  ReactDOM.render(React.createElement("h1",null,"hello world"), document.getElementById("root"));  

// * above lines are same creation of html elements we can use anyone of the method

//---------------------------------------------------------------------------------------------------

/**JSX syntax below
 * JSX is a expression not component that is written outside funtion, & that returns function.
 *
 */

// // const Hello = React.createElement("h1",null,"Hello - world")
// const Hello = <h1>Hello - world</h1>;
// ReactDOM.render(Hello, document.getElementById('root'));

/**Dynamic variables & functionas inside JSX*------------------------------------------------------------------------ **/

// const user = "Kranthi Kumar"
// const Hello = <h1>Hello - {user}</h1>
// ReactDOM.render(Hello, document.getElementById('root'));

//---------------------------------------

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
  
//   const user = {
//     firstName: 'Chaitra',
//     lastName: 'Bhat'
//   };
  
//   // const element =   <h1> Hello, {formatName(user)}! </h1>

//   const element = (
//     <h1>
//       Hello, {formatName(user)}!
//     </h1>
//   );
  
//   ReactDOM.render(element, document.getElementById('root'));

   //--->  when we want to span jsx in multiple lines place/wrap the code in parenthesis braces ()

//---------------------------------------------------------------------------------------------------

// ---> with JSX syntax
//  const element = (
//     <h1 className="greeting">
//       Hello, world4!
//     </h1>
//   );

// ---> without JSX syntax
//   const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world5!'
//   );

// ReactDOM.render(element, document.getElementById('root'));

/** Above React.createElement() is object notation of jsx , finaly jsx syntax also converted to object notation by using React.createElemet() in background */

//---------------------------------------------------------------------------------------------------
/** Rendering component */

// const root = ReactDOM.createRoot(document.getElementById('root'));
//   function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     root.render(element);
//   }
  
//   setInterval(tick, 1000);

/** Above rendering should happens only for neccessary things which is changed at that particular time : example */

//---------------------------------------------------------------------------------------------------
/** Rendering compoenent */

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

  
// const element = <Welcome name="Chaitra" age="24" />;           
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
                          //  or
// const element = <Welcome name="Chaitra" age="24" />;           
// ReactDOM.render(element, document.getElementById('root'));

//---------------------------------------------------------------------------------------------------
/** Composing Components for Reusing component multiple times */
  
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }


//   function App() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
  
//  ReactDOM.render( <App />,document.getElementById('root') );

//-------------------------------- : 

  // function formatDate(date) {
  //   return date.toLocaleDateString();
  // }
  
  // function Comment(props) {
  //   return (
  //     <div className="Comment">
  //       <div className="UserInfo">
  //         <img className="Avatar" src={props.author.avatarUrl}  alt={props.author.name} />
  //         <div className="UserInfo-name"> {props.author.name} </div>
  //       </div>
  //       <div className="Comment-text">  {props.text}  </div>
  //       <div className="Comment-date"> {formatDate(props.date)} </div>
  //     </div>
  //   );
  // }
  
  // const comment = {
  //   date: new Date(),
  //   text: 'I hope you enjoy learning React!',
  //   author: {
  //     name: 'Hello Kitty',
  //     avatarUrl: 'http://placekitten.com/g/64/64'
  //   }
  // };

  // ReactDOM.render(
  //   <Comment
  //     date={comment.date}
  //     text={comment.text}
  //     author={comment.author} />,
  //   document.getElementById('root')
  // );

  //------------------------------- : extracting the above code into multiple components as below

  // function formatDate(date) {
  //   return date.toLocaleDateString();
  // }
  
  // function Avatar(props) {
  //   return (
  //     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  //   );
  // }
  
  // function UserInfo(props) {
  //   return (
  //     <div className="UserInfo">
  //       <Avatar user={props.user} />
  //       <div className="UserInfo-name">{props.user.name}</div>
  //     </div>
  //   );
  // }
  
  // function Comment(props) {
  //   return (
  //     <div className="Comment">
  //       <UserInfo user={props.author} />
  //       <div className="Comment-text">{props.text}</div>
  //       <div className="Comment-date">{formatDate(props.date)}</div>
  //     </div>
  //   );
  // }
  
  // const comment = {
  //   date: new Date(),
  //   text: 'I hope you enjoy learning React!',
  //   author: {
  //     name: 'Hello Kitty',
  //     avatarUrl: 'http://placekitten.com/g/64/64'
  //   }
  // };

  // ReactDOM.render(
  //   <Comment
  //     date={comment.date}
  //     text={comment.text}
  //     author={comment.author} />,
  //   document.getElementById('root')
  // );

//------------------------------------------------ : importing component externally from other .js or .jsx file 

  /**  First create Hello.jsx or .js files then create components in that & use them in index.js file
   *   -add import statment above in this index.js file & use in the code
   */

  // ReactDOM.render(
  //   <>
  //       {/* <HelloObject.Hello name="Kranthi" />
  //       <HelloObject.NewHello name="Rohit" /> */}

  //       {/* <Hello name="Kranthi" />
  //       <NewHello name="Rohit" />       */}
  //   </>,
  //   document.getElementById("root")
  // );

  /** above two methods of 2 different imports(individual named imports & global * imports) */ 

  //-------------------------------------------------------------------------------- : 

   /** creating another Hello1.jsx files to show default component/function & named component combinely
   */
  //   ReactDOM.render(
  //   <>
  //       <SomeHello name="Kranthi" />
  //       <NewHello name="Rohit" />      
  //   </>,
  //   document.getElementById("root")
  // );
 
// ----------------------------------------Lecture 4. Basics of React (states & life cycle)---------------------------------------------
//-------------------------------------------------------------------------------- : clock example1
   
   /**  here below setinterval will call everytime the tick() func, so entire component is executing always for every second 
    *   -so lets make it better reusable & encapsulated.
   */
// const root = ReactDOM.createRoot(document.getElementById('root'));
  
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);   

   //-------------------------------------------------------------------------------- : clock example2
   /**  Here Clock component is resuable & encapsulated , now Clock component is not executing  & calling everytime but instead 
    *   -reusing it by passing datetime parametetrs everytime by us, but we still need clock updateing itself no need to render parametres or props inside
    *   -like this  root.render(<Clock date={new Date()} />);
   */

// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock(props) {                // component/functional based clock component
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// // class Clock extends React.Component {   // Class based clock : just replace props with this.props  & overide render function in super class in React.compoent
// //   render() {                            // explained in detail class based component below example
// //     return (
// //       <div>
// //         <h1>Hello, world!</h1>
// //         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
// //       </div>
// //     );
// //   }
// // }

// function tick() {
//    root.render(<Clock date={new Date()} />);
// }

// setInterval(tick, 1000);

   //-------------------------------------------------------------------------------- : clock example3

   /** To call Clock compoent<Clock /> once, then that component inside it needs to update itself for that we need to add "state" 
    *   -to clock component, need to convert function to class to use state
    *   -replace this.props.date to this.state.date -> first need to update initial state of timer in constructer before updating time itself 
   */ 

    // class Clock extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {date: new Date()};             // for first intializing timer   1:24 , 1:25
    //   }
    
    //   componentDidMount() {                          // when clock compoent o/p inserted into DOM with the constructer initial values then this  componentDidMount will execute
    //     this.timerID = setInterval(                  // ex: ng Onit() -> but using setInterval calling multiple times tick() to update time itself
    //       () => this.tick(),
    //       1000
    //     );
    //   }

    //   componentWillUnmount() {                       // when component is ever removed from the DOM,
    //     clearInterval(this.timerID);                 // ex: ng Destroy() -> ending timer 
    //   }
    
    //   tick() {
    //     this.setState({                              // need to use this.setState() to know react that change is happened so then only rerender will happen with updated values
    //       date: new Date(),
    //     });
    //   }
    //   render() {                                     // rendering & inserting into root node
    //     return (
    //       <div>
    //         <h1>Hello, world!</h1>
    //         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    //       </div>
    //     );
    //   }
    // }
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<Clock />);

    //--------------------------------------------: clock ex3 explantion: multiple states & updating values in current state based on prev state--------
   /** 
    *
    * 
    constructor(props) {
        super(props);
        this.state = {counter:10};                           // for first time counter with 10
    }

  //  Wrong
      this.setState({
       counter: this.state.counter + this.props.increment,  // State Updates May Be Asynchronous so o/p will wrong
      });

  // Correct                                               - arrow function based
    this.setState((state, props) => ({
      counter: state.counter + props.increment             // use callback function method (state, props) instead above object based to increment value correctly based on prev state value
    }));
            or

  // Correct same as above                                - annonymous,normal function based
    this.setState(function(state, props) {
            return {
              counter: state.counter + props.increment
            };
    });

   */
    
    //example: clock :::::::::::::::::::::: function based current state update based on prev state ::::::::::::::::::::
    //--------------------------------------------------------------------------------------------------------------------------------

    // class Clock extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {date: new Date(), seconds: 0};              // for first intializing timer 
    //   }
    
    //   componentDidMount() {                          //  when clock component o/p inserted into DOM with the constructer initial value then this componentDidMount will get executed
    //     this.timerID = setInterval(                  // ex: ng Onit() -> but using setInterval calling multiple times tick() to update time itself
    //       () => this.tick(),
    //       1000
    //     );
    //   }
    
    //   componentWillUnmount() {                       //when component is ever removed from the DOM,
    //     clearInterval(this.timerID);                 // ex: ng Destroy() -> ending timer 
    //   }
    
    //   // tick() {                                        // dont use this object based this.setState({123: newObj}) when current value increment based on prev state
    //   //   this.setState({                               // this.setState() to know react that change is happened so then rerender will happen
    //   //     date: new Date(),
    //   //     seconds: state.seconds + 1,                  
    //   //   });
    //   // }

    //   tick() {                                        // use function based this.setState((a,b) => {}) when current value increment based on prev state.
    //    this.setState((state, props) => ({
    //       date: new Date(),
    //       seconds: state.seconds + 1, 
    //    }));
    //   }
    
    //   render() {                                       // rendering & inserting into root node.
    //     return (
    //       <div>
    //         <h1>Hello, world!</h1>
    //         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    //          <h2>The clock ticking seconds :  {this.state.seconds} .</h2>
    //       </div>
    //     );
    //   }
    // }
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<Clock />);
      

//example: clock :::::::::::::::::::::: set state will merge with the old state ::::::::::::::::::::
    //-------------

    // class Clock extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {date: new Date(), seconds: 0 , user: "Kranthi Kumar"};    // here declared new state "user" dont need to set again in future to do this one along with remaining var in setState(), it will automatically merges with it
    //   }
    
    //   componentDidMount() {                          //  when clock compoent o/p inserted into DOM with the constructer then this will execute
    //     this.timerID = setInterval(                  // ex: ng Onit() -> but using setInterval calling multiple times tick() to update time itself
    //       () => this.tick(),
    //       1000
    //     );
    //   }
    
    //   componentWillUnmount() {                       //when component is ever removed from the DOM,
    //     clearInterval(this.timerID);                 // ex: ng Destroy() -> ending timer 
    //   }
    
    //   // tick() {                                        // dont use this object based this.setState({123: newObj}) when current value increment based on prev state
    //   //   this.setState({                               // this.setState() to know react that change is happened so then render will happen again
    //   //     date: new Date(),
    //   //     seconds: state.seconds + 1                  
    //   //   });
    //   // }

    //   tick() {                                        // use function based this.setState((a,b) => {}) when current value increment based on prev state
    //    this.setState((state, props) => ({
    //       date: new Date(),
    //       seconds: state.seconds + 1,                 // Merge state : it will updates date & seconds var with new values by leaving "user" var intact(means without disturbing user).
    //    }));
    //   }
    
    //   render() {                                       // rendering & inserting into root node & 3rd h2 we can directly without this.setState();
    //     return (
    //       <div>
    //         <h1>Hello, world!</h1>
    //         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    //         <h2><FormattedDate date={this.state.date} /></h2>
    //         <h2>The clock ticking seconds :  {this.state.seconds} .</h2>
    //         <h2>Who is learning React : :  {this.state.user} .</h2>
    //       </div>
    //     );
    //   }
    // }
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<Clock />);

//------------------------------------------: Multiple independent variables & their states, below is just code snippet --------

    /**  The merging is shallow, so this.setState({comments}) leaves this.state.posts intact/don't change,
     *   but completely replaces/changes only this.state.comments only.
   */ 

    // constructor(props) {              // constructor that updates multiple states to its current state
    //   super(props);
    //   this.state = {
    //     posts: [],
    //     comments: []
    //   };
    // }
    //                                   // sample to update the state by calling or fetching API's
    // componentDidMount() {
    //   fetchPosts().then(response => {
    //     this.setState({
    //       posts: response.posts
    //     });
    //   });
  
    //   fetchComments().then(response => {  
    //     this.setState({                     // so only updates comments state, dont worry about remaing things & it will keep intact
    //       comments: response.comments
    //     });
    //   });
    // }

  
    //------------------------------------------------: Statefull/Stateless, Parent/child compoent, DataFlow --------
    /**  
     *   statefull : which uses this.setState() to update UI automatically according to change of state ex: Class Based comp
     *   stateless : components without  this.setState() method ex: Functional Based comp
     *   we can use stateless components inside stateful components, and vice versa.
     *   Encapsulation : Neither parent nor child don't know comp is statefull/stateless, functional/class. so called local or encapsulated.
   T     Unidirectional flow: This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component
                              -or UI derived from that state can only affect components “below” them in the tree.
    */ 

    // below PARENT & CHILD COMPONENTS communication example (Go to above Clock example & uncomment <FormattedDate date={this.state.date} /> for demo )

    // //<FormattedDate date={this.state.date} />    // using this in above example clock component, passing parent states as props to only its child component

    //  function FormattedDate(props) {
    //   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
    // }


  //------------------------------------------------ Handling Events --------------------------------------------

  //   class Toggle extends React.Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = {isToggleOn: true};
  //     }
    
  //     handleClick() {
  //       this.setState(prevState => ({                    // setState((prevState) => {}) will update status with respect to prev status by callback
  //         isToggleOn: !prevState.isToggleOn
  //         // isToggleOn: !this.state.isToggleOn          // wrong syntax to update value based on prev value
  //       }));
  //     }
     
  //     render() {                                     // here this.handleClick, "this" refers handle event of this own Toggle component only like that
  //       return (                                     // using bind becoz to avoid undefined error when we click on onclick button 
  //                                                    // -the browser will call handleClick but doesn't understand of which component event it is .. so need to use bind(this) then understand to call event of its own Toggle component
                                                     
  //         <button onClick={this.handleClick.bind(this)}>            
  //           {this.state.isToggleOn ? 'ON' : 'OFF'}
  //         </button>
  //       );
  //     }
  //   }

  //  const root = ReactDOM.createRoot(document.getElementById('root'));
  //  root.render(<Toggle />);


//----------------------simplifying Handling Events more (below code for explantion no execution)--------------------------------------------  

   /** carefull about the meaning of "this" in JSX callbacks. In JavaScript, class methods are not bound by default. 
    *  If you forget to bind this.handleClick and pass to onClick, this will throw undefined when the function is actually called.
    *   method without parenthesis() after it, such as onClick={this.handleClick}, you should bind that method.
    **/

      // constructor(props) {
      //   super(props);
      //   this.state = {isToggleOn: true};
      //   this.handleClick = this.handleClick.bind(this);        // instead of writing bind(this) in html for every button we can write in constructor to simplify like this
      // }

      // handleClick() {
      //   this.setState(prevState => ({                    
      //     isToggleOn: !prevState.isToggleOn
      //   }));
      // }

      // render() {                                               // 3 buttons has onclick but not binded 3 times just binded 1 time in constructor & all 3 btns will use by calling it                      
      //   return (        
      //     <>                                                                          
      //       <button onClick={this.handleClick}>            
      //         {this.state.isToggleOn ? 'ON' : 'OFF'}
      //       </button>
      //       <button onClick={this.handleClick}>            
      //         {this.state.isToggleOn ? 'ON' : 'OFF'}
      //       </button>
      //       <button onClick={this.handleClick}>            
      //         {this.state.isToggleOn ? 'ON' : 'OFF'}
      //       </button>
      //     </>  
      //   );
      // }

//----------------------Alternate methods instead bind(if binding annoys)--> use arrow Function----------------------
 
//------- 1.---- public class field syntax -> to correctly bind callbacks:  -> This syntax is enabled by default in Create React App.

  // class LoggingButton extends React.Component {                             
  //   handleClick = () => {                                 // This line syntax ensures `this` LoggingButton is always bound within handleClick.
  //     alert('this is:(check in console)', this);
  //     console.log('this is:', this);
  //   };

  //   render() {
  //     return (
  //       <button onClick={this.handleClick}>
  //         Click me
  //       </button>
  //     );
  //   }
  // }
  //  const root = ReactDOM.createRoot(document.getElementById('root'));
  //  root.render(<LoggingButton />);

//--------2.---- can use an arrow function in the callback ->  The problem with this syntax is, that a different callback is created each time the LoggingButton renders. 
 
//  class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }
//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <button onClick={() => this.handleClick()}>
//         Click me
//       </button>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<LoggingButton />);

/**
 * In most cases, this is fine. However, if this callback(onclick) is passed as a prop to lower components,
 *  -those components might do an extra re-rendering due to each callback creation even the lower componet does not changed anything
 *  
 *  best is to bind in constructor or using the class fields syntax, to avoid this sort of performance problem.
 */

//------------------------------------Passing Arguments to Event Handlers(no execution just snippet)------------------------------------------------

/**
 * if id is the row ID, then e argument representing the React event will be passed as a second argument after the ID.
 * for arrow func need to pass event name as "e" explicity to recognize which button html & remaining formats like bind it will automatically forwaded during arrow meth
 * we use "this" it will also store which button html clicked incase of normal event calling method
 */
    
// deleteRow(captured_Id, evnt){  
//     console.log(aptured_Id, evnt);
// }
// let id = props.id;
// render() {
//   return (
//     <>
//       <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
//       <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
//    </> 
//   )
// }

//---------------------------------------------------Conditional Rendering & display components-----------------------------------------------
/**
 *  based on if & using props we dispay diff component
 */

// function UserGreeting(props) {
//   return <h1>Welcome back User!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// // Try changing to isLoggedIn={true}:
// root.render(<Greeting isLoggedIn={true} />);

//--------------------------------------------Conditional Rendering(login/Logout with diff mssgs)-----------------------------------------------

/**  Element Variables: to store  HTML elements(means html code), This can conditionally help you render a part of the component 
 *   -while the rest of the output doesn’t change(without change of remaining code)
 *   -below ex: let button , {button}      // her 'button' is element variable
 * */

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
// class LoginControl extends React.Component {       //  stateful component called LoginControl. It will render either <LoginButton /> or <LogoutButton /> depending on its current state
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;                                                               // declaration of element variable
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;             //  Element Variable to render part of component
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     // button = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} />   // ---ternary operator for conditional based for larged expression instead above ifelse
//     // : <LoginButton onClick={this.handleLoginClick} />
//     return (                                                                 //we can use ternary as below in place of {button}  & above code if else
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />                                   
//         {button}  <br/>
//         <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.                                                                          
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<LoginControl />);

//-------------------Ternary Operator----------------------------: 
//__________________ instead of above example ifelse

// {
//   isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} />                 // ---ternary operator for conditional based for larged expression/ components
//               : <LoginButton onClick={this.handleLoginClick} />
// }

// //The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.               // ---ternary operator for simple block of text ti display on conditional based


//-----------------------------------------Inline If with Logical && Operator --------------------------------------------

/**  embed logical expressions or variables or function calling in JSX by wrapping them inside of curly braces. { }
 *   true && Html expression output always evaluates to expression.
 *   false && Html expression always evaluates to false means ignore & skip's after && operator "operand value" (===>  same as *ngIf in Angular)
 *    - but still return falsy statement except boolean conditions
 */

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages; // ['React', 'Re: React', 'Re:Re: React'];

//   return (
//     <div>
//       <h1>Hello!</h1>
//       { 
//         unreadMessages.length > 0 &&                              //  ------- same as *ngIf
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }

//  const messages = ['React', 'Re: React', 'Re:Re: React'];
// // const messages = [];

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Mailbox unreadMessages={messages} />);

// ---------------------------------------Preventing Component from Rendering HTML/content -------------------------------
/**
 *  Returning null from that particular comp when we dont want to render the particular component into DOM element.
 */

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;                                     // returning null when we dont want to render this component in output
//   }
//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: false};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//            { this.state.showWarning ? 'Hide' : 'Show' }
//         </button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Page />);

//-------------------------------------------------List & Keys -------------------------------------------------------------

// displayed in console as o/p (open dev tools )

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

//-------------------------------------------------Rendering Multiple Components--------------
// displaying the numbers as list of items in UI

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
// const ulElem = <ul>{listItems}</ul>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ulElem); 

//----------------------------------------------------------
// displaying the numbers in component based(instead directly displaying as html elements).

// function NumberList(props) {
//   const numbers = props.num;                       // 1,2,3,4,5
//   //-------------- without key prop
//   // const listItems = numbers.map((number) =>
//   //   <li>{number}</li>
//   // );
//   //-------------for unique key prop issue in console -> key attr should be provided for list items
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// const numbers1 = [6, 7, 8, 9, 10];

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <NumberList num={numbers} />);

//-----------------resusing the comp with diff values below & enclose child comp in parent App()--------------------------------

// function NumberList(props) {
//   const numbers = props.num;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()} >{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
// function App(){
//   const numbers = [1, 2, 3, 4, 5];
//   const numbers1 = [5, 6, 7, 8, 9];
//   return (
//     <> 
//     <NumberList num={numbers} />
//     <NumberList num={numbers1} />
//     </>   
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);


//------------------------------------------------Explanation - Unique Keys & Index
//------> Most often you would use IDs from your data as keys:
// const todos = [
//   {
//     id: 100,
//     name: "chaitra"
//   },
//   {
//     id: 101,
//     name: "chaitra"
//   }
// ]

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );

//-------> No stable IDs are present for rendered items, you may use the index as value for key prop

// const todos = [
//   {
//     name: "chaitra"
//   },
//   {
//     name: "chaitra"
//   }
// ]

// const todoItems = todos.map((todo, index) =>
//   // Only do this if items have no stable IDs
//   <li key={index}>
//     {todo.text}
//   </li>
// );

// --------------------------------------------keys prop apply for array where map is applied
// function ListItem(props) {
//   return <li>{props.value}</li>;
// }
// function NumberList(props) {
//   const numbers = props.num;        // 1,2,3,4,5
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NumberList num={numbers} />);

//----- Keys Must Only Be Unique Among Siblings
// Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique

//------------------------------------------------------------Forms-----------------------------------------------------------------

// In HTML, form elements has - own state & update it based on user input  <form >
// In React, mutable state - kept in the state property of components, and only updated with setState().
// We can combine the two by making the React state be the “single source of truth”

//-------Controller component :  An input form element whose value is controlled by React in this way called a “controlled component”.

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     console.log(event.target.value);
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NameForm/>);

//----------------Explanation: textarea also has "value" attr for default text------------------------ ----------

// class TextAreaForm extends React.Component {

// constructor(props) {
//   super(props);
//   this.state = {
//     value: 'Please write an essay about your favorite DOM element.'
//   };
// }

// render() {
//   return (
//       <textarea value={this.state.value} onChange={this.handleChange} />
//   );
// }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<TextAreaForm/>);

//----------------Explanation: Select tag also has default selection -----------------------------

// initially preselect one option by default in dropdown 
// uses a "value" attr on the root <select> tag. This is more convenient in controlled comp becoz u only need to update it in 1 place at select root tag.

// class SelectForm extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {value: 'lime'};
// }

// render() {
//   return (
//         <select value={this.state.value} onChange={this.handleChange}>
//          {/* <select multiple={true} value={['mango', 'lime']}>  */}
//           <option value="grapefruit">Grapefruit</option>
//           <option value="lime">Lime</option>
//           <option value="coconut">Coconut</option>
//           <option value="mango">Mango</option>
//         </select>
//   );
// }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<SelectForm/>);

//--------select multiple options by default-----------------
{/* <select multiple={true} value={['coconut', 'lime']}> */}

//---------------------------------------------------------Handling Multiple Inputs ---------------------------------------------------------------------
// When you need to handle multiple controlled input elements, you can 
// -add -> "name" attribute
// to acces any input value -> "event.target.name"

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     // console.log(event.target.type);
//     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
//     // console.log(value);
//     this.setState({
//       [event.target.name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input name="isGoing" type="checkbox" checked={this.state.isGoing}  onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Reservation/>);

//---------------------------------Controlled Input Null Value------------------------------

// when we won't right handleInputChange() onChange function to the controlled form inputs/state to capture the user changed/inputed values. 
// -without onchange func <input value="hi" />, but it is never editable so to make edit need to pass null after 1 second as below.

// const mountNode =  document.getElementById('root');

// ReactDOM.createRoot(mountNode).render(<input value="hi" />);

// setTimeout(function() {
//   ReactDOM.createRoot(mountNode).render(<input value={null} />);
// }, 1000);


//--------------------------------------------------------Lifting State Up -------------------------------------------------------------------

// Often, several components need to reflect the same changing data. so We need to lift the shared state up to their closest 
// -common ancestor nothing but making global state.

//-------------------------------------------ex1 : 
// Calculator component state is used by BoilingVerdict child comp to render its element(using same state of parent by multiple components).
 
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};         //  100
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }
//   render() {
//     const temperature = this.state.temperature; // 100
//     return (
//       <fieldset>
//         <legend>Enter temperature in Celsius:</legend>
//         <input  value={temperature} onChange={this.handleChange} />
//         <BoilingVerdict celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Calculator/>);

//-----------------------------ex2: extracting the Temparature component from Calculator component

// In addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.
//  -now have 2 temp inputs fields & but one comp change will not reflect in another comp, becoz they are not in sync currently, 
//  -both TemperatureInput components independently kept their values in their local state

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {                   // extracted temp comp for two diff cel & fah temperature component
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;      // f
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature} onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
// class Calculator extends React.Component {
//     render() {
//       return (
//        <div>
//          <TemperatureInput scale="c" />  
//          <TemperatureInput scale="f" />
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Calculator/>);

//--------------------------------ex3: Lifting the stateup (global state to keep the components in sync)

// lifting the state from 2 temp component to its parent Calculator component so both child share the same props & will be in sync.
// Since the props of both TemperatureInput comp's are coming from the same parent Calculator comp, so 2 inputs will always be in sync.
// write below three extra fucntions for convertions of temparature

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {  // 100, toFahrenheit()
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);  212.1929
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();    212
// }

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {            // TemperatureInput accept both temperature and onTemperatureChange props from its parent Calculator
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);         // now temp comp doesn't have its local temp state, so we are calling parent calculator onTemperatureChange to update the state
//   }

//   render() {
//     const temperature = this.props.temperature;             // prev: this.state.temparature , coming from parent Calculator comp
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature} onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};   //100, c
//   }

//   handleCelsiusChange(temperature) { // 100
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   // prev We will store the current input’s temperature and scale in its each seperate local state(temp comp's). 
//   // This is the state we “lifted up” from the temp comp's(to Calculator), and it will serve as the “source of truth” for both of them.
//   // So the inputs stay in sync because their values are computed from the same state(i,e Calculator comp):

//   render() {
//     const scale = this.state.scale;     // c
//     const temperature = this.state.temperature; // 100
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;   // 100
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;  // 212

//     return (
//       <div>
//         <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Calculator/>);

//-------------------lesssons learned: 
// single “source of truth” for any data that changes in a React application.
// Instead of trying to sync the state between different components, you should rely on the top-down data flow.
// Lifting state involves writing more “boilerplate” code than two-way binding approaches, but it has a benefit, 
// -it takes less work to find and isolate bugs.

//-------------------------------------------------Composition vs Inheritance -----------------------------------------------

// recommend using composition instead of inheritance to reuse code between components.
//--------Composition:
// Component composition is React’s original development model of using either explicitly defined props 
// -or using implicit children props to pass down JSX components or elements via containment.
//--------Containment:
// Containment is useful because we can pass down entire components or JSX elements down as props instead of passing down -
// -through intermediate components. this means that children and parent components have a singular nesting pattern

// ex1---------------------
//Some components(ex: FancyBorder) don’t know their children ahead of time, a Sidebar or Dialog that represent generic “boxes”.
//use the special children prop to pass children elements directly into their output:

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children} 
//     </div>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">Welcome</h1>
//       <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
//     </FancyBorder>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<WelcomeDialog/>);

//--------------------------ex2:
// Sometimes you might need multiple “holes” in a component
// -We can make our own custom convention if we’re needing to use a more specific children-prop-breakdown.

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">{props.left}</div>
//       <div className="SplitPane-right">{props.right}</div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <SplitPane  left={<Contacts />} right={<Chat />} />
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

// write <Contacts /> and <Chat />(comp code want to see output means) & are just objects
//This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React.

//----------------------------------------------------ex3: Specialization
// Composition in React happens when a special component renders a generic component and then configures it with the passed props.

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">{props.title}</h1>
//       <p className="Dialog-message">{props.message}</p>
//     </FancyBorder>
//   );
// }
// function WelcomeDialog() {                   // WelcomeDialog is more specific comp renders the more generic comp below Dialog
//   return (
//     <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<WelcomeDialog/>);

//---------------------ex4: Class based example similar to Func - of composition & Specilazation.

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}                                            {/* composition */}
//     </div>
//   );
// }
// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">{props.title}</h1>               {/* composition: More specific children-prop-breakdown */}
//       <p className="Dialog-message">{props.message}</p>
//       {props.children}                                              {/* composition */}
//     </FancyBorder>
//   );
// }

// class SignUpDialog extends React.Component {                   // specialization : more specific SignupDialog renders more generic one Dialog component below
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSignUp = this.handleSignUp.bind(this);
//     this.state = {login: '', message:''};
//   }

//   render() {                                                
//     return (
//       <Dialog title="Mars Exploration Program" message="How should we refer to you?">
//         <input value={this.state.login} onChange={this.handleChange} />
//         <button onClick={this.handleSignUp}>Sign Me Up!</button>
//       </Dialog>
//     );
//   }

//   handleChange(e) {
//     this.setState({login: e.target.value});
//   }

//   handleSignUp() {
//     alert(`Welcome aboard, ${this.state.login}!`);
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<SignUpDialog/>);