import React from "react";
import Card from "./Card.js";
// import { robots } from "./robots.js"; //deleted since in the 2nd way [on line 26 of index.js] we import {robots} to index.js

//! 1st way - w/o destructuring
// const CardList = (props) => {
//     return (
//         <div>
//             <React.StrictMode>
//                 <Card id={props.robots[0].id} name={props.robots[0].name} email={props.robots[0].email}/>
//                 <Card id={props.robots[1].id} name={props.robots[1].name} email={props.robots[1].email}/>
//                 <Card id={props.robots[2].id} name={props.robots[2].name} email={props.robots[2].email}/>
//             </React.StrictMode>
//         </div>
//     );
// }
// export default CardList;

//! 2nd way - w/ destructuring
// const CardList = (props) => {
//     const {robots} = props;
//     return (
//         <div>
//             <React.StrictMode>
//                 <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//                 <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//                 <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//             </React.StrictMode>
//         </div>
//     );
// }
// export default CardList;

//! 3rd way - w/ destructuring in the function props
// const CardList = ({robots}) => {
//     return (
//         <div>
//             <React.StrictMode>
//                 <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//                 <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//                 <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//             </React.StrictMode>
//         </div>
//     );
// }
// export default CardList;

//! looping over the robots with .map()
// const CardList = ({robots}) => {
//     const cardsArray = robots.map((val, i) => {
//         return ( 
//             <Card 
//                 key={i} 
//                 id={robots[i].id} 
//                 name={robots[i].name} 
//                 email={robots[i].email}
//             />
//         )
//     });

//     return (
//         <div>
//             <React.StrictMode>
//                 {cardsArray}    
//             </React.StrictMode>
//         </div>
//     ); 
// }
// export default CardList;

//! looping over the robots with .map() simplified
const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error("NOOOOO");
    // }

    return (
        <div>
            <React.StrictMode>
                {
                    robots.map((val, i) => {
                        return ( 
                            <Card 
                                key={i} 
                                id={robots[i].id} 
                                name={robots[i].name} 
                                email={robots[i].email}
                                phone={robots[i].phone}
                                website={robots[i].website}
                                company={robots[i].company}
                                address={robots[i].address}
                            />
                        )
                    })
                }                
            </React.StrictMode>
        </div>
    ); 
}
export default CardList;