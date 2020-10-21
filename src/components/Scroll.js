import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
    // console.log(props);
    return (
        <div className="removeScrollBar" style={{overflowY: "scroll", height: "800px"}}>
            {props.children}
        </div>
    )
};

export default Scroll;