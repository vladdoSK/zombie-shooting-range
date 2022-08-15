import React from "react";
import "./Zombies.css"
import { useDispatch, useSelector } from 'react-redux';
import { add_point } from "../../redux/actionCreators";

const Zombies = (props) => {

    const dispatch = useDispatch();
    const point_redux = useSelector(state => state);

    const add_points = (points) => {

        dispatch(add_point(points));

        //props.setPoints(props.points + points);
        //props.setShots(([...props.patron.slice(1)]));
    }

    return (
        <div className="block_zomby">
            <div className={props.isStart ? "zomby_1 active" : "zomby_1"}>
                <div className="head_zomby" onClick={ev => add_points(2)}></div>
                <div className="body_zomby" onClick={ev => add_points(1)}></div>
            </div>
            <div className={props.isStart ? "zomby_2 active" : "zomby_2"}>
                <div className="head_zomby" onClick={ev => add_points(2)}></div>
                <div className="body_zomby" onClick={ev => add_points(1)}></div>
            </div>
        </div>
    );
}

export default Zombies;