import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Despesas from '../Pages/Despesas/Despesas';
import Home from '../Pages/Home/Home';
import PrivateRoute from './PrivateRoute.js'

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <PrivateRoute path="/despesas" component={Despesas} exact/>
                    <Redirect from="*" to="/"/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;
