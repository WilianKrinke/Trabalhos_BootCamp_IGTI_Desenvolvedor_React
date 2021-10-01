import orderTeams from "./orderTeams";
import { v4 as uuidv4 } from 'uuid';

export default function flatTeamsDatas(vetorTimesComPontuações) {

    let vetorFlatTeamsData = []

    vetorTimesComPontuações.forEach(element => {
        
        const uniqueDataTeam = {
            id: uuidv4(),
            nome_time: element.time,
            total_pontos: element.pontuacao_final_rodada.total_pontos,
            total_vitorias: element.pontuacao_final_rodada.total_vitorias,
            total_empates: element.pontuacao_final_rodada.total_empates,
            total_derrotas: element.pontuacao_final_rodada.total_derrotas,
            total_gols_pro: element.pontuacao_final_rodada.total_gols_marcados,
            total_gols_contra: element.pontuacao_final_rodada.total_gols_sofridos,
            total_de_gols: element.pontuacao_final_rodada.total_gols_marcados + element.pontuacao_final_rodada.total_gols_sofridos
        }

        vetorFlatTeamsData.push(uniqueDataTeam)
    });
    const orderedTeamsByPoints = orderTeams(vetorFlatTeamsData)

    return orderedTeamsByPoints
}