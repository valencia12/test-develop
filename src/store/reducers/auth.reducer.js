import { types } from "../types/types";

export const authReducer = (state=null, action) =>{
    switch (action.type) {
        case types.login:
            return {
                authorization: action.payload.authorization,
                email: action.payload.email,
                member: action.payload.member
            }
        case types.logout:
            return null 
        default:
            return state;
    }
}

/*
    {
        token:'KLAKSMQKALSKQMSLA'
        email: 'ASAS@test.com'
    }
*/