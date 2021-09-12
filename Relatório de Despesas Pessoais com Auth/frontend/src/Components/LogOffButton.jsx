import React from 'react';
import logOff from '../utils/logOff';
import { ButtonLogOff } from './styled';


const LogOffButton = () => {
    return <ButtonLogOff onClick={e => logOff(e)}>LogOut</ButtonLogOff>
}

export default LogOffButton;
