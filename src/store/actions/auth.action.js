import axios from "axios";
import { types } from "../types/types";

export const login = (authorization, email, member) =>{
    return {
        type:types.login,
        payload:{
            authorization,
            email,
            member
        }
    }
}

export const logout = () =>({
    type: types.logout
})