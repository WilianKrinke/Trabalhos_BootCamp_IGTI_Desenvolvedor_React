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
                <Route path="/notfound" component={NotFound}/>
                <Redirect from="*" to="/notfound"/>
            </Switch>
          </BrowserRouter> 
        </>
    );
}

export default Routes;
