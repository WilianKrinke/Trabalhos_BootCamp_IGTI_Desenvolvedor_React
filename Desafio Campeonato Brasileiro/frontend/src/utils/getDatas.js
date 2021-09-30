import filteredDatasByRodada from "./filteredDatasByRodada"

export default async function getDatas(year = 2003, rodada = 46) {
    const datas = await fetch(`http://localhost:3001/${year}`)
    const datasJson = await datas.json()
    
    const filteredTeamsOrdered = filteredDatasByRodada(rodada,datasJson);
    
    return filteredTeamsOrdered
}