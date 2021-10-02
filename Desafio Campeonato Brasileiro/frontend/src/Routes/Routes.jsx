import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import NotFound from '../pages/404/NotFound';
import Home from '../pages/Home/Home'
import SecondPage from '../pages/SecondPage/SecondPage';
import ThirdPage from '../pages/ThirdPage/ThirdPage';

const Routes = () => {
    return (
        <>
          <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/secondpage" component={SecondPage} exact/>
                <Route path="/thirdpage" component={ThirdPage}/>
                <Route path="/404" component={NotFound}/>
                <Redirect from="*" to="/404"/>
            </Switch>
          </BrowserRouter> 
        </>
    );
}

export default Routes;
