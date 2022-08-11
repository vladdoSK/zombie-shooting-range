import React from "react";
import "./Shot.css"

const Shot = (props) => {

    return (
        <div className="block_patron">
            {props.patron.map((m) =>
                    (<div className="patron"></div>))}
        </div>
    );
}

export default Shot;