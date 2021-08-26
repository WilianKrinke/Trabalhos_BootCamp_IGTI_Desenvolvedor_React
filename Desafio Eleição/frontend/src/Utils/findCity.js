import { electionUrl } from "./consumingUrls";
import insertCandidatesName from "./insertCandidatesName";

async function findCity(idselect) {
    const info = await fetch(electionUrl)
    const datas = await info.json()    
    const oneDataCity = datas.filter(item => item.cityId === idselect)

    //Responsabilidade de ordenar votos de maneira decrescente
    const citysOrdenedPerVotesUp = oneDataCity.sort((a, b) => b.votes - a.votes)

    //Responsabilidade de inserir nomes dos candidatos comparando IDs
    const cityWithCandidatesName = insertCandidatesName(citysOrdenedPerVotesUp);  
    return cityWithCandidatesName;
}

export default findCity;