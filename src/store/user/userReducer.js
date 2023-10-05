import {USER_ACTION_TYPES} from "./userType";

const INITIAL_STATE = {
    currentUser: null
}
export const userReducer = (state = INITIAL_STATE, action)=>{
    const {type, payload} = action;
console.log('typeeeeee', type)
    switch (type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
           return state;
    }
}
