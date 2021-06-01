import { types } from "../../types/types";


export const chatReducer = ( state, action ) => {

    switch ( action.type ) {
        
        case types.loadUsers:
            return {
                ...state,
                usuarios: [ ...action.payload ]
            }
        
        case types.activateChat:

            if (state.chatActivo === action.payload) return state;
            
            return {
                ...state,
                chatActivo: action.payload
            }
    
        default:
            return state;
    }

}