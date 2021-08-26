import React, { useEffect, useState } from 'react';
import findCity from '../Utils/findCity';
import Cards from './Cards';
import { SectionElectionsCards } from './styled/styled';

const ElectionCards = ({idSelect,candidatesNum}) => {
    const [dataCity, setDataCity] = useState([]);
    
    useEffect(() => {
        async function teste() {
            const datatteste = await findCity(idSelect)
            candidatesNum(datatteste.length)
            setDataCity(datatteste)           
        }
        teste()
    },[idSelect,candidatesNum]);

    return (
        <SectionElectionsCards>            
            {dataCity.map((item, index) => {
                return(
                    <article key={item.id}>
                        <Cards 
                            id={item.id} 
                            idCandidato={item.candidateId}
                            nameCandidate={item.nameCandidate} 
                            idCity={item.cityId}
                            votes={item.votes}
                            indexArr={index}
                            percentageVotes={item.percentageVotes}
                        />
                    </article>
                )
            })}          
        </SectionElectionsCards>
    );
}

export default ElectionCards;
