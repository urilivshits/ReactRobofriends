//! default assets after deleting the stuff we dont need for the project
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//! imported "tachyons", a bootstrap-like library for React+CSS
import "tachyons";

//! imported the App component (final layer) that will be a parrent of CardList and all the rest
import App from "./containers/App.js";

//! Everything is imported in App
ReactDOM.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//! deleted default assets
// import App from './App.js';
// import Hello from './Hello.js';

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello greeting={"Hello React Ninja"}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <h1>Hello World</h1>,
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//! imports before creating the CardList component: to clean up index.js (created the CardList component and gave it all the html inputs)
// //? imported the Card component
// import Card from "./Card.js";

// //? imported the robots object
// import { robots } from "./robots.js";

// ReactDOM.render(
//   <div>
//       <React.StrictMode>
//           <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//           <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//           <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//       </React.StrictMode>
//   </div>,
//   document.getElementById('root')
// );

//! state before creating the App component
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

// //? imported "tachyons", a bootstrap-like library for React+CSS
// import "tachyons";

// //? imported the robots object
// import {robots} from "./robots.js"; 

// //? imported the CardList component that will be a parrent of Card
// import CardList from "./CardList.js";

// //? 1st way: { robots } is imported into CardList directly
// // ReactDOM.render(
// //   <div>
// //     <React.StrictMode>
// //       <CardList />
// //     </React.StrictMode>
// //   </div>,
// //   document.getElementById('root')
// // );

// //? 2nd way: { robots } is imported here and passed as props to CardList
// ReactDOM.render(
//   <div>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </div>,
//   document.getElementById('root')
// );