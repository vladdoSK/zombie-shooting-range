import React from "react";
import "./Aliens.css"

const Aliens = (props) => {
    
    const add_points = (points) => {
        props.setPoints(props.points + points);
        props.setShots(([...props.patron.slice(1)]));
    }

    return (
        <div className="block_aliens">
            <div className={props.isStart ? "alien_1 active" : "alien_1"}>
                <div className="head_alien" onClick={ev => add_points(3)}></div>
                <div className="body_alien" onClick={ev => add_points(2)}></div>
            </div>

            <div className={props.isStart ? "alien_2 active" : "alien_2"}>
                <div className="head_alien" onClick={ev => add_points(3)}></div>
                <div className="body_alien" onClick={ev => add_points(2)}></div>
            </div>
        </div>
    );
}

export default Aliens;