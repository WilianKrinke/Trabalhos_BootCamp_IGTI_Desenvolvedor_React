import React, { useReducer } from 'react';
import {GlobalStateContext} from './appContext'
import { reducer } from './reducers';
import { contextStates } from './states'

const GlobalStateProvider = ({children}) => {
    const [state, stateDispatch] = useReducer(reducer, contextStates)

    return <GlobalStateContext.Provider value={{ state, stateDispatch }}>{children}</GlobalStateContext.Provider>
}


export default GlobalStateProvider;
