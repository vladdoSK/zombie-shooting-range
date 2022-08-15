import { combineReducers } from 'redux'
import { ADD_POINT, DEFAULT_SHOTS, DELETE_POINTS, NEW_RECORD, REMOVE_SHOT } from './actionCreators';


const defaultState = 0;

const pointReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POINT:
            return state + action.payload;
        case DELETE_POINTS:
            return state - action.payload;
        default:
            return state;
    }

}

const recordReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case NEW_RECORD:
            return state = action.payload;
        default:
            return state;
    }
}

const defaultShot = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const shotReducer = (state = defaultShot, action) =>{
    switch (action.type) {
        case REMOVE_SHOT:
            return [...state.slice(1)];
        case DEFAULT_SHOTS:
            return state = defaultShot;
        default:
            return state;
    }
}


export const rootReducer = combineReducers({
    point_r: pointReducer,
    record_r: recordReducer, 
    shot_r: shotReducer,
})