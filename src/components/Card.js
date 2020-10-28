import React, {useState} from "react";

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
const Card = ({ name, email, id, phone, website, company, address }) => {
    const [isShown, setIsShown] = useState(false);
    // const showElement = () => {
    //     setIsShown(true);
    //     // document.getElementsByClassName("element").style.display = "flex";
    // }
    // const flexOn = () => {
    //     let zxc = document.getElementsByClassName("element").style.display = "flex";
    //     return zxc;
    // }
    return (
        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="tc bg-light-green dib br3 pa3 ma2  bw2 shadow-5">
            <div className="flex">
                <div>
                    <img alt="robots" src={`https://robohash.org/${id}.png?size=200x200`}/>
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>

                {isShown && (
                    <div className="tl f6 pa3">
                        {/* <p style={{color: "#9EEBCF"}}>.</p> */}
                        <p className="b mb1">Company</p>
                        <p className="ma0">{company.name}</p>
                        <p className="ma0">{company.bs}</p>
                        <p className="ma0">{phone}</p>
                        <a className="ma0" href={website}>{website}</a>
                        <p className="b mb1">Address</p>
                        <p className="ma0">{address.street}</p>
                        <p className="ma0">{address.suite}</p>
                        <p className="ma0">{address.city}</p>
                        <p className="ma0">{address.zipcode}</p>


                    </div>
                )}
                {/* {!isShown && (
                    <>
                        <p style={{color: "#9EEBCF"}}>.</p>
                        <p style={{color: "#9EEBCF"}}>.</p>
                    </>
                )} */}
            </div>
        </div>
    );
    // const [isShown, setIsShown] = useState(false);
    // return (
    //     <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    //         <img alt="robots" src={`https://robohash.org/${id}.png?size=200x200`}/>
    //         <>
    //             <h4>{name}</h4>
    //             <p>{email}</p>
    //             {isShown && (
    //                     <p>{website}</p>
    //             )}
    //         </>
    //     </div>
    // );
}
export default Card;