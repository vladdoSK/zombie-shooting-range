import { combineReducers } from 'redux'
import { ADD_POINT, DELETE_POINTS, NEW_RECORD } from './actionCreators';


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

export const rootReducer = combineReducers({
    point_r: pointReducer,
    record_r: recordReducer
})