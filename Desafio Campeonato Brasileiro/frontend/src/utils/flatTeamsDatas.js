import orderTeams from "./orderTeams";
import { v4 as uuidv4 } from 'uuid';

export default function flatTeamsDatas(vetorTimesComPontuações) {

    let vetorFlatTeamsData = []

    vetorTimesComPontuações.forEach(element => {
        const finalScoreTeam = element.pontuacao_final_rodada;        
        const uniqueDataTeam = {
            id: uuidv4(),
            nome_time: element.time,
            total_pontos: finalScoreTeam.total_pontos,
            total_vitorias: finalScoreTeam.total_vitorias,
            total_empates: finalScoreTeam.total_empates,
            total_derrotas: finalScoreTeam.total_derrotas,
            total_gols_pro: finalScoreTeam.total_gols_marcados,
            total_gols_contra: finalScoreTeam.total_gols_sofridos,
            total_de_gols: finalScoreTeam.total_gols_marcados + finalScoreTeam.total_gols_sofridos
        }

        vetorFlatTeamsData.push(uniqueDataTeam)
    });
    
    const orderedTeamsByPoints = orderTeams(vetorFlatTeamsData)
    return orderedTeamsByPoints
}