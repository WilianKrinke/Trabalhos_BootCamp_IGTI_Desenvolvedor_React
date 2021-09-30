import {typeAction} from './typeActions'

export const reducer = (state, action) => {
    switch (action.type) {
        case typeAction.INSERT_YEAR: {
            return {...state, anoDoCampeonato: action.payload}
        }
        
        case typeAction.INSERT_RODADA: {
            return {...state, rodada: action.payload}
        } 
            
        default:
            break;
    }

    return { ...state };
}