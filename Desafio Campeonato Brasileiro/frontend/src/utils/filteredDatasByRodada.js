import flatTeamsDatas from "./flatTeamsDatas";

export default async function filteredDatasByRodada(rodada = 46, datasJson) {
    const filteredDatas = datasJson.filter(item => item.numero === parseInt(rodada));
    const filteredDatasToRodadas = filteredDatas.map(item => item.partidas).flat()
    
    let vetorTimesComPontuações = []

    filteredDatasToRodadas.forEach(element => {
        const mandante = {
            time: element.mandante,
            pontuacao_final_rodada: element.pontuacao_geral_mandante
        }
        const visitante = {
            time: element.visitante,
            pontuacao_final_rodada: element.pontuacao_geral_visitante
        }

        vetorTimesComPontuações.push(mandante,visitante)  
    });


   const flatTeamsOrdered = flatTeamsDatas(vetorTimesComPontuações);

   return flatTeamsOrdered;
}