import filterDespesasToMonthYear from "./filterDepesasToMonthYear"

/* eslint-disable no-unused-vars */
export default function getDespesasByMonthYear(ano, mes, resumeOrDetail){
    const mesReferencia = `${ano}-${mes}`

    return fetch('http://localhost:3001/despesas',{
        credentials: 'include',
        method: 'GET'
    })
        .then(resp => resp.json())
        .then(item => {            
            return filterDespesasToMonthYear(item,mesReferencia)  
        })
}