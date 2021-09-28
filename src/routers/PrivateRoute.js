import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"
//const user = null;


export default function PrivateRoute({ component: Component }, ...rest) {
    const user = useSelector(state => state.auth)
    let useLogin = null; 
    if (user){
        useLogin = user.authorization;
    }
    
    useEffect(() => {
        console.log(user)
    }, [user]); 
    return (
        <Route {...rest}>
           { useLogin ? <Component/>  : <Redirect to="/" />}
        </Route>
    )
}
