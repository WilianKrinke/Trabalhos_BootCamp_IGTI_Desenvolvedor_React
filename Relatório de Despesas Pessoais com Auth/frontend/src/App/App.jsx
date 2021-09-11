import React, { useEffect, useState } from 'react'
import './App.css';
import isAuth from '../utils/isAuth'
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Despesas from '../Pages/Despesas/Despesas';
import Home from '../Pages/Home/Home';

function App() { 

  const [hasSession, setHasSession] = useState(false);

  
  useEffect(() => {
    isAuth().then(resp => {
      console.log('Logado')
      setHasSession(true)
    }, () => {
      console.log('Não Logado')
      setHasSession(false)
    })

  }, []);


  if (hasSession) {
    return (
      <>
        <BrowserRouter>
          <Switch>
              <Route path="/despesas" component={Despesas} exact/> 
              <Redirect from="*" to='/'/>
          </Switch>
        </BrowserRouter>
      </>
    )
  } else {
    return (
      <>
        <BrowserRouter>
          <Switch>
              <Route path="/" component={Home} exact/> 
          </Switch>
        </BrowserRouter>
      </>
    );    

  }

  
}

export default App;
