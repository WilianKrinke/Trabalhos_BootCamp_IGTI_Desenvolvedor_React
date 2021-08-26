/* eslint-disable no-unused-vars */
import { countriesUrl } from "./consumingUrls"
import insertPercentage from "./insertPercentage"

async function insertPresenceVotes(infos) {

    const infoCitiesDatas = await fetch(countriesUrl)
    const infoCities = await infoCitiesDatas.json()   

    const VotesPresenceCities = infoCities.map(item => [item.id, item.presence])

    //inserção de votos presenciais válidos
    VotesPresenceCities.forEach(element => {
            infos.forEach(item => {
                if (element[0] === item.cityId) {
                    item.cityPresenceVotes = element[1]
                }
            })
        })
    

    
    const infosWithPercentage = insertPercentage(infos)    
    return infosWithPercentage;
}

export default insertPresenceVotes;