import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'

const Routes = () => {
    return (
        <>
          <BrowserRouter>
            <Switch>
                <Route to="/" component={Home}/>
            </Switch>
          </BrowserRouter> 
        </>
    );
}

export default Routes;
