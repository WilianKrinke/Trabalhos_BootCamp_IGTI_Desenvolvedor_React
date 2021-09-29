import {typeAction} from './typeActions'

export const reducer = (state, action) => {
    switch (action.type) {
        case typeAction.INSERT_YEAR: {
            return {anoDoCampeonato: action.payload}
        }
        
        case typeAction.INSERT_RODADA: {
            return {rodada: action.payload}
        } 
            
        default:
            break;
    }

    return { ...state };
}