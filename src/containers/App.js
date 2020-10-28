import React, {Component} from "react";
// import {robots} from "../robots.js";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import "./App.css"

//! adding the API to get fake users and adding the Scroll component
class App extends Component {
    constructor () {
        super ()
        this.state = {
            robots: [],
            searchfield: ""
        }
        // console.log(0, "constructor");
    };

    componentDidMount () {
        fetch ("https://jsonplaceholder.typicode.com/users")
            .then(response => {return response.json()})
            .then(users => {this.setState({robots: users})});
        // this.setState({robots: robots});
        // console.log(1, "componentDidMount");
        console.log("Happy you made it here, welcome :)")
    };

    onSearchChange = (event) => { // if passed here without "=" and "=>" "this" will belong to the function; if with "=" and "=>" - "this" belongs to the master object
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    };

    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return (robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || 
            robots.email.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        });
        // console.log(2, "render");
        // console.log(filteredRobots);
        if (this.state.robots.length === 0) {
            return <h2 className="tc">API call returned empty. Seems like the source updated the data structure and I have to update the App.</h2>
        }
        else {
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    {/* <CardList robots={this.state.robots}/> */}
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    };
};
export default App;

// //! before adding the "state" to connect the two children of App: SearchBox and CardList
// import React from "react";
// import CardList from "./CardList.js";
// import {robots} from "./robots.js";
// import SearchBox from "./SearchBox.js"

// const App = () => {
//     return (
//         <div className="tc">
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>
//         </div>
//     );
// };
// export default App;

// //! adding the "state" to connect the two children of App: SearchBox and CardList
// import React, {Component} from "react";
// import {robots} from "./robots.js";
// import CardList from "./CardList.js";
// import SearchBox from "./SearchBox.js";
// import "./App.css"

// class App extends Component {
//     constructor () {
//         super ()
//         this.state = {
//             robots: robots,
//             searchfield: ""
//         }
//     }

//     onSearchChange = (event) => { // if passed here without "=" and "=>" "this" will belong to the function; if with "=" and "=>" - "this" belongs to the master object
//         // console.log(event.target.value);
//         this.setState({searchfield: event.target.value});
//     }

//     render () {
//         const filteredRobots = this.state.robots.filter(robots => {
//             return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         });
//         // console.log(filteredRobots);
//         return (
//             <div className="tc">
//                 <h1>RoboFriends</h1>
//                 <SearchBox searchChange={this.onSearchChange} />
//                 {/* <CardList robots={this.state.robots}/> */}
//                 <CardList robots={filteredRobots}/>
//             </div>
//         )
//     }
// };
// export default App;