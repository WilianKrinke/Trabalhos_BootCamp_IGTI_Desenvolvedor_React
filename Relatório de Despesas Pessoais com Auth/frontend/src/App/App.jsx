/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import isAuth from '../utils/isAuth'
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Despesas from '../Pages/Despesas/Despesas';
import Home from '../Pages/Home/Home';
import Routes from '../Routes/routes';


function App() {
    return (      
          <Routes />        
    )
  } 
        
      


export default App;
