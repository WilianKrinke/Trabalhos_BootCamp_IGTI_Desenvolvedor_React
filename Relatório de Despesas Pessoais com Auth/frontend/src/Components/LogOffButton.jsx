import React from 'react';
import { ButtonLogOff } from './styled';
import { useHistory } from 'react-router';


const LogOffButton = () => {
    const history = useHistory()
    function toHome(e) {
        e.preventDefault()
        localStorage.clear()
        history.push('/')
    }
    return <ButtonLogOff onClick={e => toHome(e)}>LogOut</ButtonLogOff>
}

export default LogOffButton;
