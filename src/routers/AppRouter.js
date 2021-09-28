import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import NotFound from '../components/NotFound';
import { Benevist } from '../screens/Benevist';
import { Home } from '../screens/Home';
import PrivateRoute from './PrivateRoute';


function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
            <Route
                path="/"
                exact
                component = {Home}
            />
            <Route
                path='/signin'
                exact
            >
                <Redirect to="/"/>
            </Route>

            <PrivateRoute
                exact
                path='/Benevist'
                component = {Benevist}
            />

            <Route 
                path="*"
                component={NotFound}/>
                
            </Switch>
        </BrowserRouter>
    
);
}

export default AppRouter;