import { candidatesUrl } from "./consumingUrls";
import insertPresenceVotes from "./insertTotalPresences";

async function insertCandidatesName(infos) {    
    const infoCandidates = await fetch(candidatesUrl)
    const candidatesJson = await infoCandidates.json()

    const simulationArray = candidatesJson.map(item => [item.name, item.id])

    //Inserção de nomes de acordo com ids
    simulationArray.forEach(element => {
        infos.forEach(item => {
            if (element[1] === item.candidateId) {
                item.nameCandidate = element[0]
            }
        });
    });

    //responsabilidade de inserção de votos válidos para cada cidade em cada item dos objetos
    const infosWithPresencesVotes = insertPresenceVotes(infos)    
    return infosWithPresencesVotes
}

export default insertCandidatesName;