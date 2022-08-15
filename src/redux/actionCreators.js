export const ADD_POINT = "ADD_POINT"
export const DELETE_POINTS = "DELETE_POINTS"
export const NEW_RECORD = "NEW_RECORD"


export const add_point = (payload) => ({type: ADD_POINT, payload});
export const delete_point = (payload) => ({type: DELETE_POINTS, payload});
export const new_record = (payload) => ({type: NEW_RECORD, payload});