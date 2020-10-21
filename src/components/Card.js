import React from "react";

//! 1st way - w/o destructuring
// const Card = (props) => {
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img alt="robots" src={`https://robohash.org/${props.id}.png?size=200x200`}/>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }
// export default Card;

//! 2nd way - w/ destructuring
// const Card = (props) => {
//     const { name, email, id } = props;
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img alt="robots" src={`https://robohash.org/${id}.png?size=200x200`}/>
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// }
// export default Card;

//! 3rd way - w/ destructuring in the function props
const Card = ({ name, email, id }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}.png?size=200x200`}/>
            <>
                <h4>{name}</h4>
                <p>{email}</p>
            </>
        </div>
    );
}
export default Card;