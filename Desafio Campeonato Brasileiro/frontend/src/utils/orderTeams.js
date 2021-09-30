export default function orderTeams(vetorFlatTeamsData) {
    const orderedTeamsbyPoints = vetorFlatTeamsData.sort((a,b) => b.total_pontos - a.total_pontos)

    return orderedTeamsbyPoints
}