import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Despesas from '../Pages/Despesas/Despesas';
import Home from '../Pages/Home/Home';

const Routes = () => {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/despesas" component={Despesas} exact/>
            <Redirect from="*" to="/"/>
          </Switch>
        </BrowserRouter>
      </>
    );
  };
  
  export default Routes;
