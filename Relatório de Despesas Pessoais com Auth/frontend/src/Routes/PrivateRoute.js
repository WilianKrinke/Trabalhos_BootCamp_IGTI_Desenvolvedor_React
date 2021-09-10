import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const privateroute = props => {
    const isLogged = !!localStorage.getItem('isauth')
    return isLogged ? <Route {...props}/> : <Redirect to="/" />
}

export default privateroute;
