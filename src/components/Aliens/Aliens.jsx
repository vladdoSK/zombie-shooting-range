import React from "react";
import "./Aliens.css"
import { useDispatch, useSelector } from 'react-redux';
import { add_point } from "../../redux/actionCreators";

const Aliens = (props) => {
    
    const dispatch = useDispatch();
    const point_redux = useSelector(state => state);

    const add_points = (points) => {
        dispatch(add_point(points));
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