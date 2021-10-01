import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
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
            </Switch>
          </BrowserRouter> 
        </>
    );
}

export default Routes;
