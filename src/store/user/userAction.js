import {createAction} from "../../utils/reducer/reducer";
import {USER_ACTION_TYPES} from "./userType";



export const setCurrentUser = (user)=>{
 createAction(USER_ACTION_TYPES.SET_CURRENT_USER,  user)
}