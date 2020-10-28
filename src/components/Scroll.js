import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
    // console.log(props);
    return (
        <div className="removeScrollBar" style={{overflowY: "scroll", height: "900px"}}>
            {props.children}
        </div>
    )
};

export default Scroll;