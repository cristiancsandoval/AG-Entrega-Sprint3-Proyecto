import { typesUser } from "../types/types"

export const userReducer = (state={user:[]}, action) =>{
    switch(action.type){
        case typesUser.login:
            return{
                ...state,
                user: action.payload
            }
        case typesUser.logut:
            return{
                ...state,
                user: []
            }
        default:
            return state
    }
}