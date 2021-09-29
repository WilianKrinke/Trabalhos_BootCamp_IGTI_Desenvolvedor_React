import { typeAction } from "./typeActions"

export const getYearToStates = (dispatch, year) => {
    dispatch({type: typeAction.INSERT_YEAR, payload: year})
}

export const getNumRodadaToStates = (dispatch, rodada) => {
    dispatch({type: typeAction.INSERT_RODADA, payload: rodada})
}