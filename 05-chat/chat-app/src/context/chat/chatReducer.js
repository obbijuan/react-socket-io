import { types } from "../../types/types";


export const chatReducer = ( state, action ) => {

    switch ( action.type ) {
        
        case types.loadUsers:
            return {
                ...state,
                usuarios: [ ...action.payload ]
            }
    
        default:
            return state;
    }

}